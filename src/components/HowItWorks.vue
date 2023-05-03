<script setup>
import { reactive } from "vue";
const how_it_works = reactive([
  {
    img: "profile",
    heading: "Registration",
    paragraph:
      "Create a profile on the WaveBudget platform in less than five minute without requiring complex documentation.",
  },
  {
    img: "cart",
    heading: "Choose an item to buy",
    paragraph:
      " Select an item on the online WaveMart store or visit any of the partnered physical store/supermarket to select an item for purchase",
  },
  {
    img: "payment",
    heading: "Select payment plan",
    paragraph:
      "The item will be delivered immediately while you continue your payment as planned until item is fully paid or pay off the purchase.",
  },
  {
    img: "delivery",
    heading: "Delivery and payment",
    paragraph:
      " The item will be delivered immediately while you continue your payment as planned until item is fully paid or pay off the purchase.",
  },
]);
</script>
<template>
  <div class="how-it-works-section">
    <h1 class="works">HOW IT WORKS</h1>
  </div>
  <div class="grid-how-it-works">
    <div v-for="work in how_it_works" class="div" :key="work.img">
      <div class="how-it-work-img">
        <img
          :src="require(`../assets/images/${work.img}.png`)"
          :alt="work.heading"
        />
      </div>

      <h3 class="how-it-work-h3">{{ work.heading }}</h3>
      <p class="how-it-work-p">{{ work.paragraph }}</p>
    </div>
  </div>
</template>
<style scoped>
.how-it-works-section {
  padding: 0 4.5rem;
}
.grid-how-it-works {
  display: flex;
  padding: 20px;
  justify-content: space-between;
  gap: 20px;
}
.div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}
.how-it-work-h3 {
  font-weight: 600;
}

.how-it-work-img {
  background: #f6f6f6;
  width: 80px;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 50%;
}

.how-it-work-img img {
  width: 100%;
}
@media screen and (max-width: 720px) {
  .how-it-works-section {
    padding: 0 2rem;
  }
  .grid-how-it-works {
    display: grid;
    margin-top: 40px;
    padding: 20px;
    grid-template-columns: auto auto;
    margin-top: 20px;
    gap: 20px;
    justify-content: center;
    text-align: center;
  }
}
@media screen and (max-width: 520px) {
  .grid-how-it-works {
    display: grid;
    grid-template-columns: auto;
    padding: 0 3rem;
  }
}
</style>
