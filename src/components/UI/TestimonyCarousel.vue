<template>
<h1>Customer Testimony</h1>
  <GSCarousel
    :items="items"
    item-gap="16"
    :items-to-show="2"
    :layout="GSLayoutDefault"
    :layout-props="{
      disableArrows: true,
    }"
  >
    <template #item="{ data }">
      <div class="slide">
        <div class="paragraph">
             {{ data.paragraph }} 
        </div>

         <div class="location">
        {{ data.location}}
      </div>
      </div>
     
    </template>
  </GSCarousel>
</template>


<script>
import { GSCarousel, GSLayoutDefault } from 'gitart-scroll-carousel/bundled'
import 'gitart-scroll-carousel/dist/index.css'
import 'gitart-scroll-carousel/dist/GSArrow.css'
import 'gitart-scroll-carousel/dist/GSLayoutNumeric.css'

export default {
 components : {
    GSCarousel
 },
 data () {
    return {
        items: [
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
        GSLayoutDefault
    }
 }
}
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  font-size: 40px;
  font-weight: 600;
  color: #008b8b;
}
.slide {
  box-shadow: 0 6px 15px -3px rgb(0 0 0/0.3);
  padding: 25px;
  border-radius: 5px;
  height: 160px;
  background: white;
  color: #000;

}
.paragraph {
 font-family: Roboto;
 font-size: 15px;
 font-weight: 400;
 text-align: left;
}
.location {
   font-family: Roboto;
   font-size: 24px;
   font-weight: 500;
   /* line-height: 28px; */
   letter-spacing: 0em;
   text-align: left;
  margin-top: 30px;
}
@media screen and (max-width: 520px) {
  .paragraph {
 font-family: Roboto;
 font-size: 10px;
 font-weight: 400;
 text-align: left;
}
.location {
   font-family: Roboto;
   font-size: 15px;
   font-weight: 500;
   text-align: left;
  margin-top: 10px;
}
.slide {
  box-shadow: 0 6px 15px -3px rgb(0 0 0/0.3);
  padding: 20px;
  border-radius: 5px;
  height: 155px;
  width: 150px;
  background: white;
  color: #000;
  gap: 25px;

}
h1 {
  text-align: center;
}
}
</style>