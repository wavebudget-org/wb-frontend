<template>
  <div class="carousel-body" v-show="visibleSlide === index">
 <p>{{ paragraph }}</p>
 <p class="p">{{ location }}</p>
  </div>
  <!-- <slot></slot> -->
</template>

<script>
export default {
props : ["visibleSlide", "index", "paragraph","location"],
data() {
    return {

    }
}
}

</script>

<style scoped>
   .carousel-body {
    display: flex;
    justify-content: center;
    margin: auto;
    flex-direction: column;
    background: white;
    width: 90%;
    height: 200px;
   }
   p {
    padding: 1rem;
    margin: 1rem;
    font-family: Roboto;
   font-size: 24px;
   font-weight: 400;
   line-height: 28px;
   letter-spacing: 0em;
     text-align: left;

   }
   .p {
     font-family: Roboto;
   font-size: 24px;
   font-weight: 500;
   line-height: 28px;
   letter-spacing: 0em;
     text-align: left;
   }
</style>