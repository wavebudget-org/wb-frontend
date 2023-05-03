<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names-->
<!-- eslint-disable vue/valid-template-root -->
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
let interval = ref(null);
const current = ref(0);
const carousel = ref([
  {
    title: "Pay for Everything Easily ",
    paragraph: `Buy now, pay later for items to reach
        other needs that matter, pay back with
        0% interest rate`,
    img: "wrist-watch",
  },
  {
    title: "Gain  Financial  Independence",
    paragraph: "Pay small with 0% interest",
    img: "house",
  },
  {
    title: "Gain  Access  To  Affordable Loans",
    paragraph: "Pay small with 0% interest",
    img: "man_",
  },
]);
const animate = () => {
  interval.value = setInterval(() => {
    const index =
      current.value < carousel.value.length - 1 ? current.value + 1 : 0;
    current.value = index;
  }, 3000);
};
onMounted(() => {
  animate();
});
onBeforeMount(() => {
  clearInterval(interval.value);
});
</script>

<template>
  <section>
    <section
      v-for="(car, index) in carousel"
      :key="index"
      class="body-section"
      v-show="current === index"
    >
      <div class="body-title">
        <h1 class="body-h1">{{ car.title }}</h1>
        <p class="body-paragraph">
          {{ car.paragraph }}
        </p>
      </div>
      <div class="body-image">
        <img
          :src="require(`../assets/carousel/${car.img}.png`)"
          :alt="car.img"
        />
      </div>
    </section>
  </section>
</template>
<style scoped>
.body-section {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-around;
  padding: 0 4.5rem;
  margin-top: 100px;
}

.body-paragraph {
  margin-top: 1rem;

  width: 60%;
}

.body-image img {
  width: 100%;
}

.body-h1 {
  font-size: 3rem;
  color: #12617a;
  font-weight: 600;
  line-height: 60px;
  width: 60%;
}
@media screen and (max-width: 720px) {
  .body-image {
    display: none;
  }
  .body-section {
    grid-template-columns: 100%;
    padding: 0 2rem;
  }
  .body-h1 {
    text-align: center;
    width: 100%;
  }
  .body-paragraph {
    text-align: center;
    width: 95%;
  }
}
</style>
