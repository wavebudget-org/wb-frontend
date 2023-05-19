<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names-->
<!-- eslint-disable vue/valid-template-root -->
<script setup>
import { reactive } from "vue";
const testimonies = reactive([
  {
    paragraph:
      " Thank you for initiating a Buy Now Pay Later platform. Thank you for making it easier to use your platform for solving a pain point. The system is currently serving its purpose, a dual use for core profession purpose",
    location: "From Lagos",
  },
  {
    paragraph:
      "The way you people are running the business is okay, just keep it up, may Almighty ALLAH help us all, and I really appreciate WaveBudget, WaveBudget is my choice.",
    location: "From Kaduna",
  },
  {
    paragraph: "WaveBudget made my purchase smooth and satisfying.",
    location: "From Lagos",
  },
  {
    paragraph:
      "The laptop got to her yesterday, she is very happy about it, thank you so much.",
    location: "From kaduna",
  },
  {
    paragraph:
      "The laptop is neat and is in good shape. it's working fine and the performance is enough.Also grateful for prompt delivery.",
    location: "From Abuja",
  },
]);
</script>
<template>
  <section>
    <h2 class="testimony-h2">Customer Testimonies</h2>
    <div class="testimony-flex">
      <div
        class="testimonies"
        v-for="testimony in testimonies"
        :key="testimony.location"
      >
        <p>{{ testimony.paragraph }}</p>
        <h4>{{ testimony.location }}</h4>
      </div>
    </div>
  </section>
</template>
<style scoped>
.testimonies {
  background: #fff;
  gap: 10px;
  padding: 3rem 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.testimony-flex {
  display: grid;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  grid-template-columns: auto auto auto;
}

.testimonies h4 {
  margin-top: 10px;
  color: black;
  font-weight: bold;
}

.testimony-h2 {
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  color: #12617a;
  margin-top: 2rem;
  text-transform: uppercase;
}
@media screen and (max-width: 720px) {
  .testimony-flex {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
