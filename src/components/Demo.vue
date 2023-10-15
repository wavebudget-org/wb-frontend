<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names-->
<!-- eslint-disable vue/valid-template-root -->
<script setup>
import { ref, computed } from 'vue';
import { moneyInNaira } from '../helpers/money-helper';

import Modal from './UI/Modal'
const defaultInstallmentPrice = (itemPrice) => (itemPrice * 111 / 100);
const amountToPay = ref(0);
const itemName = ref('')
const modeOfPayment = ref('');
const onBefore1Month = ref();
const onBefore2Months = ref();
const onAfter2Months = ref();
const downPayment = ref(defaultInstallmentPrice(amountToPay.value) * 40 / 100);
const show = ref(false);
const errorMessage = ref('')
let totalValue = ref();
// const formIsValid = ref(false)
const amountInNaira = computed(() => {
  return amountToPay.value.toLocaleString("en-NG", { style: "currency", currency: "NGN" })
})

const showHandler = () => show.value = !show.value

const generate = () => {
  //condition
  if (amountToPay.value === 0 || modeOfPayment.value === "" || itemName.value === "") {
    errorMessage.value = "Check your input again and filled as required!"
    return
  }

  //Default Installment Price
  const dip = defaultInstallmentPrice(amountToPay.value);
  if (modeOfPayment.value === "zero-pay") {
    if (amountToPay.value > 70000) {
      errorMessage.value = `The maximum price of zero-pay item is ${moneyInNaira(70000)}`
      return;
    }
    //When paying before 30days 
    onBefore1Month.value = moneyInNaira(defaultInstallmentPrice(amountToPay.value))
    // totalValue = amountToPay.value

    //When paying for two months
    onBefore2Months.value = (dip - ((dip - amountToPay.value) / 2)) / 2
    // const twoMonth = (dip - ((dip - amountToPay.value) / 2)) / 2;
    // totalValue = twoMonth
    onAfter2Months.value = dip / 3
    //When paying for more than two months
    const installment = dip / 3;
    totalValue.value = { amountInNaira, modeOfPayment, itemName, onBefore1Month, onAfter2Months, onBefore2Months, installment }

  } else if (modeOfPayment.value === "flexi-pay") {
    if (downPayment.value < defaultInstallmentPrice((amountToPay.value) * 40 / 100)) {
      errorMessage.value = `The default downpayment must never be less than ${defaultInstallmentPrice((amountToPay.value) * 40 / 100)}`
      return
    } else if (downPayment.value > amountToPay.value) {
      errorMessage.value = "Your downpayment has exceeded the total amount"
      return;
    }
    //Debit
    const debit = defaultInstallmentPrice(amountToPay.value) - downPayment.value

    //Discount
    const discount = (dip - amountToPay.value) / 2

    onAfter2Months.value = debit / 4;
    onBefore2Months.value = debit - discount
    onBefore1Month.value = moneyInNaira(debit);

    totalValue.value = { amountInNaira, modeOfPayment, itemName, onBefore1Month, onBefore2Months, onAfter2Months, downPayment: downPayment }
  }
  showHandler()
}

</script>

<template>
  <div v-if="show">
    <Modal :show="show" @toggle="showHandler" :item-name="totalValue.itemName" :instalment-mode="totalValue.modeOfPayment"
      :item-price="totalValue.amountInNaira" :down-payment="totalValue.downPayment" :one-month="totalValue.onBefore1Month"
      :two-month="totalValue.onBefore2Months" :other-month="totalValue.onAfter2Months">
    </Modal>
  </div>

  <article class="demo-section">
    <h1 class="demo-h1">TRY A DEMO</h1>
    <h3 class="demo-p">BNPL Calculator</h3>
    <section class="bnpl_table">
      <form @submit.prevent="generate">
        <div class="form-control">
          <label for="item-name">Input Item Name</label>
          <input type="text" placeholder="Enter item name" v-model="itemName" id="item-name" name="item-name" required />
        </div>
        <div class="form-control">
          <label for="item-price">Input item price amount (#)</label>
          <input type="number" placeholder="Enter item price" v-model="amountToPay" id="item-price" name="item-price"
            :max="modeOfPayment === 'zero-pay' ? 70000 : 10000000000" />
        </div>
        <div class="form-control">
          <h3>Pick a payment plan </h3>
          <div class="div-radio">
            <div class="radio-div">
              <input type="radio" name="mode-of-payment" id="zero-pay" value="zero-pay" v-model="modeOfPayment"><label
                for="zero-pay">Zero
                pay</label>
            </div>
            <div class="radio-div">
              <input type="radio" name="mode-of-payment" id="flexi-pay" value="flexi-pay" v-model="modeOfPayment"><label
                for="flexi-pay">Flexi
                Pay</label>
            </div>

          </div>
        </div>
        <div class="form-control" v-if="modeOfPayment === 'flexi-pay'">
          <label for="item-name">Input your down payment that is greater than {{
            moneyInNaira((defaultInstallmentPrice(amountToPay) * 40 / 100)) }}
          </label>
          <input type="number"
            :placeholder="`Enter downpayment less or equals to ${(defaultInstallmentPrice(amountToPay) * 40 / 100)}`"
            v-model="downPayment" :min="(defaultInstallmentPrice(amountToPay) * 40 / 100)" :max="amountToPay"
            id="downpaymentt" name="downpayment" />
        </div>
        <p class="error-message">{{ errorMessage }}</p>
        <div class="form-btn">
          <button class="form-button">Generate</button>
        </div>
      </form>
      <img class="phone-image" src="../assets/images/phone.png" alt="phone" />
    </section>
  </article>
</template>
<style scoped>
.demo-h1 {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  font-size: 40px;
  font-weight: 600;
  color: #008b8b;
}

.demo-p {
  font-size: 26px;
  line-height: 42px;
  letter-spacing: 0em;
  margin-left: 7.5rem;
  margin-top: 1rem;
}

.bnpl_table img {
  position: relative;
  right: -60px;
}

.form-control h3 {
  font-size: 16px;
  font-weight: 600;
}

.div-radio {
  display: grid;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.radio-div {
  border-radius: 1rem;
  width: 100%;
  background-color: #ebf6f6;
  padding: 0.2rem 0.5rem;
}

.div-radio label {
  font-weight: 500;
  margin-left: 0.6rem;
}

.div-radio input {
  cursor: pointer;
}

input:invalid {
  color: red;
  border-radius: 12px solid red !important;
}

.radio-div input:checked {
  color: #008b8b;
  background-color: #008b8b;
}

.radio-div input:checked+label {
  color: #008b8b;

}

.error-message {
  color: red;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-align: center;
}

@media screen and (max-width: 720px) {
  .demo-section * {
    text-align: center;
  }

  .form-control * {
    text-align: start !important;
  }

  .demo-p {
    margin-left: 0;
  }

  .demo-h1 {
    font-size: 30px;
  }

  .demo-p {
    font-size: 20px;
  }
}
</style>
