<template>
  <main>
    <Header />
    <Hero />
    <Button btn_1="Get started" btn_2="I have a question" />
    <SectionVue />
    <Demo />
    <how-it-works></how-it-works>
    <JoinUs />
   
    <!-- <CarouselPath /> -->
     <TestimonyCarousel /> 
    <!-- <Testimonies /> -->
    <section class="bnpl_table">
      <div class="coming_soon">
        <h1 class="h1">
          WaveBudget app <br />
          coming soon.
        </h1>
        <LastButton btn_3="Join the waitlist" btn_4="I have a question" />
      </div>
      <img class="phone-image" src="../assets/images/phone-app.png" alt="" />
    </section>
    <WaitList/>
    <FAQ />
    <Footer />
  </main>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Button from "../components/UI/Button.vue";
import LastButton from "../components/UI/LastButton.vue";
import SectionVue from "../components/SectionVue.vue";
import Demo from "../components/Demo.vue";
import HowItWorks from "../components/HowItWorks.vue";
import JoinUs from "../components/JoinUs.vue";
import WaitList from "../components/WaitList.vue";
import Footer from "../components/Footer.vue";
import FAQ from "@/components/FAQ";
// import CarouselPath from "@/components/UI/CarouselPath";
import TestimonyCarousel from '@/components/UI/TestimonyCarousel';
export default {
  name: "HomeView",
  components: {
    Hero,
    Button,
    SectionVue,
    Demo,
    HowItWorks,
    JoinUs,
    // Testimonies,
    WaitList,
    Footer,
    FAQ,
    // CarouselPath,
    TestimonyCarousel,
    LastButton,
    Header
  },
};
</script>
<style scoped>

</style>

