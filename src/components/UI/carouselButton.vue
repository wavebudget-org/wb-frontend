<template>
  <div class="btn-carouseel">
    <slot></slot>
    <!-- <button @click="next" class="next">Next</button> -->
    <!-- <button @click="prev" class="perev">Prev</button> -->
  </div>
</template>

<script>
export default {
 data () {
    return {

    }
 },
 methods: {
    next() {
    this.$emit("next")
    },
    prev () {
  this.$emit("prev")
    }
 }
}
</script>

<style scoped>
   .btn-carousel {
    position: relative;
    width: 600px;
    height: 350px;
    overflow: hidden;
   }
   button {
    position: absolute;
    height: 40px;
    width: 50px;
    margin: 20px;
    background: rgba(0,0,0,0.8);
    border: none;
    color: white;
   }
   button:active, button:hover {
    outline: none;
    cursor: pointer;
   }
   .next {
    right: 0;
   }
   .prev {
    left: 0;
   }
</style>