<template>
  <carousel-button
   @next="next"
    @prev="prev">
    
    <CarouselSlide v-for="(slide, index) in slides"
     :key="slide"
     :index="index"
      :visibleSlide ="visibleSlide"
      :paragraph ="slide.paragraph"
      :location ="slide.location"
      />
  </carousel-button>
</template>

<script>
import CarouselButton from './carouselButton.vue'
import CarouselSlide from './CarouselSlide'
export default {
  components: {
   CarouselSlide,
    CarouselButton
  },
 data() {
    return {
      visibleSlide : 0,
        slides : [
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
        ],
        

    }
 },
 computed: { 
  slideLength () {
  return this.slides.length
}
 },
 methods : {
  next() {
  if(this.visibleSlide >= this.slideLength -1) {
     this.visibleSlide = 0
  } else {
    this.visibleSlide++
  }
  },
  prev() {
if(this.visibleSlide <= 0) {
     this.visibleSlide = this.slideLength -1
  } else {
    this.visibleSlide--
  }
  }
 }
}
</script>

<style>

</style>