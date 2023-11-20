<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names-->
<!-- eslint-disable vue/valid-template-root -->
<script setup>
import { ref, computed, watchEffect } from 'vue';
import { moneyInNaira } from '../helpers/money-helper';

import Modal from './UI/Modal'
const defaultInstallmentPrice = (itemPrice) => (itemPrice * 110 / 100);
const amountToPay = ref({ amount: '', isValid: false });
const itemName = ref({ name: '', isValid: false })
const modeOfPayment = ref({ value: '', isValid: false });
const onBefore1Month = ref();
const onBefore2Months = ref();
const onAfter2Months = ref();
const downPayment = ref({ amount: null, isValid: false });
const show = ref(false);
const errorMessage = ref('')

watchEffect(() => {
  downPayment.value.amount = (defaultInstallmentPrice(amountToPay.value.amount) * 40 / 100).toFixed(2)
})
const validateItemName = () => {
  const pattern = /^[a-zA-Z]*$/;
  if (!pattern.test(itemName.value.name)) {
    itemName.value.name = itemName.value.name.substring(0,itemName.value.name.length - 1)
    itemName.value.isValid = true;
    return
  } else {
    itemName.value.isValid = false
  }
}
let totalValue = ref();
// const formIsValid = ref(false)
const amountInNaira = computed(() => {
  return amountToPay.value.amount.toLocaleString("en-NG", { style: "currency", currency: "NGN" })
})

const showHandler = () => show.value = !show.value
//Form conditions

const generate = () => {
  //condition
  if (amountToPay.value.amount === 0 || modeOfPayment.value.value === "" || itemName.value.name === "") {
    itemName.value.isValid = true
    errorMessage.value = "Check your input again and filled as required!"
    return
  }

  //Default Installment Price
  const dip = defaultInstallmentPrice(amountToPay.value.amount);
  if (modeOfPayment.value.value === "zero-pay") {
    if (amountToPay.value.amount > 70000) {
      errorMessage.value = `The maximum price of zero-pay item is ${moneyInNaira(70000)}`
      return;
    }
    //When paying before 30days 
    onBefore1Month.value = moneyInNaira(dip - ((dip - amountToPay.value.amount) / 2))


    //When paying for two months
    onAfter2Months.value = dip / 2

    //When paying for more than two months
    const installment = dip / 2;
    console.log(installment);
    totalValue.value = { amountInNaira, modeOfPayment: modeOfPayment.value.value, itemName: itemName.value.name, onBefore1Month, onAfter2Months, onBefore2Months, installment }

  } else if (modeOfPayment.value.value === "flexi-pay") {
    if (downPayment.value.amount < defaultInstallmentPrice((amountToPay.value.amount) * 40 / 100).toFixed(2)) {
      errorMessage.value = `The default downpayment must never be less than ${defaultInstallmentPrice((amountToPay.value.amount) * 40 / 100).toFixed(2)}`
      return
    } else if (downPayment.value.amount > amountToPay.value.amount) {
      errorMessage.value = "Your downpayment has exceeded the total amount"
      return;
    }
    //Debit
    const debit = defaultInstallmentPrice(amountToPay.value.amount) - downPayment.value.amount
    //Discount
    const discount = (dip - amountToPay.value.amount) / 2
    onBefore1Month.value = moneyInNaira(amountToPay.value.amount - downPayment.value.amount);
    onAfter2Months.value = debit / 4;
    onBefore2Months.value = debit - discount;
    totalValue.value = { amountInNaira, modeOfPayment: modeOfPayment.value.value, itemName: itemName.value.name, onBefore1Month, onBefore2Months, onAfter2Months, downPayment: downPayment.value.amount }
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
          <input type="text" placeholder="Enter item name" v-model="itemName.name" v-on:input="validateItemName"
            id="item-name" name="item-name" required />
          <p v-if="itemName.isValid" class="err-msg">This input must be not empty; it requires a text value</p>
        </div>
        <div class="form-control">
          <label for="item-price">Input item price amount (#)</label>
          <input type="number" placeholder="Enter item price" v-model="amountToPay.amount" id="item-price"
            name="item-price" :max="modeOfPayment.value === 'zero-pay' ? 70000 : 10000000000" />
        </div>
        <div class="form-control">
          <h3>Pick a payment plan </h3>
          <div class="div-radio">
            <div class="radio-div">
              <input type="radio" name="mode-of-payment" id="zero-pay" value="zero-pay"
                v-model="modeOfPayment.value"><label for="zero-pay">Zero
                pay</label>
            </div>
            <div class="radio-div">
              <input type="radio" name="mode-of-payment" id="flexi-pay" value="flexi-pay"
                v-model="modeOfPayment.value"><label for="flexi-pay">Flexi
                Pay</label>
            </div>
          </div>
        </div>
        <div class="form-control" v-if="modeOfPayment.value === 'flexi-pay'">
          <label for="item-name">Input your down payment that is greater than {{
            moneyInNaira((defaultInstallmentPrice(amountToPay.amount) * 40 / 100)) }}
          </label>
          <input type="number"
            :placeholder="`Enter downpayment less or equals to ${(defaultInstallmentPrice(amountToPay.amount) * 40 / 100)}`"
            v-model="downPayment.amount" :min="(defaultInstallmentPrice(amountToPay.amount) * 40 / 100).toFixed(2)"
            :max="amountToPay.amount" id="downpaymentt" name="downpayment" />
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

.error-message,
.err-msg {
  color: red;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-align: center;
}

.err-msg {
  text-align: left;
  font-weight: 400;
  letter-spacing: 0;
  margin-top: 0.1rem;
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
