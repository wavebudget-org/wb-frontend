<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names-->
<!-- eslint-disable vue/valid-template-root -->
<script>
export default {
  Data () {
    return {
    item: "",
    price: "",
    payment: ""
    }
  },
  methods : {
    generate() {
     alert("generate")
    }
    }
  }

</script>

<template>
  <article class="demo-section">
    <h1 class="demo-h1">TRY A DEMO</h1>
    <h3 class="demo-p">BNPL Calculator</h3>
    <section class="bnpl_table">
      <form @submit.prevent="generate">
        <div class="form-control">
          <label for="monthly_income">What is your monthly income</label>
          <input
          v-model="income"
            type="text"
            placeholder="This information is important to get your credit limit"
          />
        </div>
        <div class="form-control">
          <label for="what_you_want_to_buy"
            >What item do you want to buy?</label
          >
          <input type="text"  v-model="item"/>
        </div>
        <div class="form-control">
          <label for="price_range">What is the item price range?</label>
          <input type="text" v-model="price" />
        </div>

        <div class="form-control">
          <label for="select_payment">Select a payment term</label>
          <input type="text" v-model="payment" />
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
