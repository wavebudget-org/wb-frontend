<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names-->
<!-- eslint-disable vue/valid-template-root -->
<script setup>
import { ref, computed } from 'vue';
import { moneyInNaira } from '../helpers/money-helper';

import Modal from './UI/Modal'
const amountToPay = ref(0);
const itemName = ref('')
const modeOfPayment = ref('');
const onBefore1Month = ref();
const onBefore2Months = ref();
const onAfter2Months = ref();
const downPayment = ref();
const show = ref(false);
let totalValue;
// const formIsValid = ref(false)
const amountInNaira = computed(() => {
  return amountToPay.value.toLocaleString("en-NG", { style: "currency", currency: "NGN" })
})

const err = computed(() => {
  if (amountToPay.value <= 30000) {
    return 'Too small'
  } else {
    return amountInNaira.value
  }
})
const showHandler = () => show.value = !show.value
const defaultInstallmentPrice = (itemPrice) => (itemPrice * 111 / 100)
const generate = () => {
  //Default Installment Price
  const dip = defaultInstallmentPrice(amountToPay.value);
  if (modeOfPayment.value === "zero-pay") {

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
    totalValue = installment

  } else if (modeOfPayment.value === "flexi-pay") {
    const debit = defaultInstallmentPrice(amountToPay.value) - downPayment.value
    console.log(debit)
    const discount = (dip - amountToPay.value) / 2
    console.log(discount)
    onAfter2Months.value = debit / 4;
    onBefore2Months.value = debit - discount
    onBefore1Month.value = debit
  }
  console.log(moneyInNaira(totalValue))
  const results = { modeOfPayment: modeOfPayment.value, onBefore1Month: moneyInNaira(onBefore1Month.value), onBefore2Months: moneyInNaira(onBefore2Months.value), onAfter2Months: moneyInNaira(onAfter2Months.value) }
  console.log(itemName.value, amountToPay.value, modeOfPayment.value);
  console.log(results);
  showHandler()
}

</script>

<template>
  <Modal :show="show" @toggle="showHandler" />
  <article class="demo-section">
    <h1 class="demo-h1">TRY A DEMO</h1>
    <h3 class="demo-p">BNPL Calculator</h3>
    <section class="bnpl_table">
      <form @submit.prevent="generate">
        <div class="form-control">
          <label for="item-name">Input Item Name</label>
          <input type="text" placeholder="Enter item name" v-model="itemName" id="item-name" name="item-price" />
        </div>
        <div class="form-control">
          <label for="item-price">Input item price amount (#) {{ err }}</label>
          <input type="number" placeholder="Enter item price" v-model="amountToPay" id="item-price" name="item-price" />
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
        <div class="form-control" v-show="modeOfPayment === 'flexi-pay'">
          <label for="item-name">Input your down payment that is greater than {{
            moneyInNaira((defaultInstallmentPrice(amountToPay) * 40 / 100)) }}
          </label>
          <input type="number" placeholder="Enter item name" v-model="downPayment"
            :min="(defaultInstallmentPrice(amountToPay) * 40 / 100)" :max="amountToPay" id="item-name"
            name="item-price" />
        </div>
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

.radio-div input:checked {
  color: #008b8b;
  background-color: #008b8b;
}

.radio-div input:checked+label {
  color: #008b8b;

}

@media screen and (max-width: 720px) {
  .demo-section * {
    text-align: center;
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
