<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names-->
<!-- eslint-disable vue/valid-template-root -->
<script setup>
import { ref, computed } from 'vue';
const amountToPay = ref(0);
const modeOfPayment = ref('');
const noOfPayment = ref();
const amountInNaira = computed(() => {
  return amountToPay.value.toLocaleString("en-NG", { style: "currency", currency: "NGN" })
})
const generate = () => {
  console.log(amountToPay.value, modeOfPayment.value, noOfPayment.value);
}

</script>

<template>
  <article class="demo-section">
    <h1 class="demo-h1">TRY A DEMO</h1>
    <h3 class="demo-p">BNPL Calculator</h3>
    <section class="bnpl_table">
      <form @submit.prevent="generate">
        <div class="form-control">
          <label for="item-price">Input item price amount (#) {{ amountInNaira }}</label>
          <input type="number" placeholder="Enter item price name" v-model="amountToPay" id="item-price"
            name="item-price" />
        </div>
        <div class="form-control">
          <!-- <label for="what_you_want_to_buy">What item do you want to buy?</label>
          <input type="text" /> -->
          <h3>Pick a payment plan</h3>
          <div class="div-radio">
            <input type="radio" name="mode-of-payment" id="zero-pay"><label for="zero-pay">Zero pay</label>
            <input type="radio" name="mode-of-payment" id="mode-of-payment"><label for="flexi-pay">Flexi Pay</label>
          </div>
        </div>
        <div class="form-control">
          <label for="price_range">Select duration of payment (monthly)?</label>
          <select name="payment-duration" id="payment-duration">
            <option v-for="opt in 3" :key="opt" :value="opt">{{ opt }}</option>
          </select>
        </div>

        <!-- <div class="form-control">
          <label for="select_payment">Select a payment term</label>
          <input type="text" />
        </div> -->
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
  display: flex;
  gap: 0.3rem;
  margin-top: 0.5rem;
}

.div-radio label {
  font-weight: 500;
}

.div-radio input {
  cursor: pointer;
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
