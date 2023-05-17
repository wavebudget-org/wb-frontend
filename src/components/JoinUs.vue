<script setup>
import { reactive } from "vue";
const individuals = reactive([
  {
    img: "payment",
    title: "Convenient Payment",
    paragraph:
      "WaveBudget offers individuals a hassle free way to purchase items and pay for them over time. With flexible payment plans and variety of products available.",
  },
  {
    img: "setting",
    title: "100% Secure",
    paragraph:
      "WaveBudget takes your security seriously, using the latest encryption and security measures to keep your information safe. ",
  },
  {
    img: "home",
    title: "Affordable Loan",
    paragraph:
      "WaveBudget loans are designed to meet the needs of individuals with zero interest rates and repayment terms that fits your budget.",
  },
  {
    img: "profile",
    title: "Easy To Use",
    paragraph:
      "With the simple registration process and user friendly interface, WaveBidget is easy to use.",
  },
]);
const businesses = reactive([
  {
    img: "mountain",
    title: "Increased Sales",
    paragraph:
      "By partnering with WaveBudget , businesses can increase their sales by offering customers a convenient way to purchase items and pay for them over time",
  },
  {
    img: "speaker",
    title: "Brand Awareness",
    paragraph:
      " Partnering with WaveBudget can help business increase their brand awareness, reaching a wider audience of potential customers.",
  },
  {
    img: "human",
    title: "Easy  Onboarding",
    paragraph:
      "WaveBudget makes it easy for businesses to onboard and start offering their products through the platform, with no complex setup or integration required.",
  },
  {
    img: "delivery",
    title: "Instant Payment",
    paragraph:
      " With the simple registration process and user friendly interface, WaveBidget is easy to use.",
  },
]);
</script>
<template>
  <section class="join-us">
    <h1 class="join-us-h1">Join Us Today!</h1>
    <article class="join-us-flex">
      <h3 class="header">Individuals</h3>
      <div class="individual-grid-1">
        <div
          class="cont"
          v-for="individual in individuals"
          :key="individual.title"
        >
          <img
            :src="require(`../assets/images/${individual.img}.png`)"
            :alt="individual.img"
          />
          <div>
            <h4>{{ individual.title }}</h4>
            <p>{{ individual.paragraph }}</p>
          </div>
        </div>
      </div>
    </article>
    <article class="join-us-flex businesses">
      <h3 class="header">Businesses</h3>
      <div class="individual-grid-1">
        <div class="cont" v-for="business in businesses" :key="business.title">
          <img
            :src="require(`../assets/images/${business.img}.png`)"
            :alt="business.img"
          />
          <div>
            <h4>{{ business.title }}</h4>
            <p>{{ business.paragraph }}</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>
<style scoped>
.join-us {
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.5rem;
  padding: 0.8rem;
  margin-top: 2rem;
}

.join-us-h1 {
  text-align: center;
  margin-top: 30px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 40px;
  color: #12617a;
  grid-column: 1 / span 2;
  text-transform: uppercase;
}

.header {
  text-align: center;
  font-size: 20px;
  color: #12617a;
  font-weight: bold;
  margin-bottom: 1rem;
}

.individual-grid-1 {
  display: grid;
  grid-template-columns: auto auto;
  gap: 0.4rem;
}

.cont {
  display: flex;
  padding: 0.5rem;
  align-items: flex-start;
  color: #fff;
  background-color: #12617a;
  height: 225px;
  padding-top: 1rem;
  column-gap: 0.6rem;
}

.cont::after {
  content: "";
  clear: both;
  display: table;
}

.cont img {
  float: left;
  padding: 1rem;
  border-radius: 50%;
  background-color: #fff;
  margin: auto 0.4rem;
  width: 70px;
}

.cont div {
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  }

.cont p {
  font-size: 0.8rem;
  font-weight: 100;
  margin-top: 0.8rem;
}
.businesses .cont:nth-child(2),
.businesses .cont:nth-child(3) {
  background-color: #008b8b;
}

.businesses h3 {
  color: #008b8b;
}
@media screen and (max-width: 960px) {
  .cont {
    height: 280px;
  }
}
@media screen and (max-width: 890px) {
  .cont {
    height: 300px;
  }
}
@media screen and (max-width: 850px) {
  .individual-grid-1 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
    padding: 20px;
  }
  .cont {
    height: 125px;
  }
  .cont img {
    margin: 0;
  }
}
@media screen and (max-width: 720px) {
  .individual-grid-1 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
    padding: 20px;
  }
  .cont {
    height: 160px;
  }
}
@media screen and (max-width: 620px) {
  .cont {
    height: 220px;
  }
}
@media screen and (max-width: 590px) {
  .cont {
    height: 280px;
  }
}
@media screen and (max-width: 528px) {
  .join-us {
    display: grid;
    grid-template-columns: auto;
  }
  .join-us-h1 {
    grid-column: 1 / span 1;
  }
  .cont {
    padding: 1rem;
    height: max-content;
  }
}
</style>
