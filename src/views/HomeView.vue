<template>
  <main>
    <Hero />
    <Button btn_1="Get started" btn_2="I have a question" />
    <SectionVue />
    <Demo />
    <how-it-works></how-it-works>
    <JoinUs />
    <Testimonies />
    <section class="bnpl_table">
      <div class="coming_soon">
        <h1 class="h1">WaveBudget app <br> coming soon.</h1>
        <Button btn_1="Join the waitlist" btn_2="I have a question" />
      </div>
      <img class="phone-image" src="../assets/images/phone-app.png" alt="" />
    </section>
    <WaitList />
    <FAQ @show-answer="toggleAnswer" :questions="questions"/>
    <Footer />
  </main>
</template>

<script>
// @ is an alias to /src
import Hero from "../components/Hero.vue";
import Button from "../components/UI/Button.vue";
import SectionVue from "../components/SectionVue.vue";
import Demo from "../components/Demo.vue";
import HowItWorks from "../components/HowItWorks.vue";
import JoinUs from "../components/JoinUs.vue";
import Testimonies from "../components/Testimonies.vue";
import WaitList from "../components/WaitList.vue";
import Footer from "../components/Footer.vue";
import FAQ from "@/components/FAQ"
export default {
  name: "HomeView",
  components: {
    Hero,
    Button,
    SectionVue,
    Demo,
    HowItWorks,
    JoinUs,
    Testimonies,
    WaitList,
    Footer,
    FAQ
  }, 
  //  emits: ['show-answer'],
  data () {
    return {
      questions : [],
      showAnswer : false
    }
  },
  methods : {
    toggleAnswer () {
    this.showAnswer = !this.showAnswer
    }

  },
  created() {
      this.questions = [
     {
    question : " 1. What is WaveBudget ?",
    answer : "A : WaveBudget is a commerce-enabled technology platform that provides affordable shopping credit to consumers and empowers businesses to sell in installments."
  },
  {
    question : " 2. How does WaveBudget works ?",
    answer : "A : WaveBudget allows consumer to shop for items and pay installments over time.The platform charges a 10% markup on the purchase price and offers repayment terms of up to 5 months.  ."
  },
 {
  question : "3. Is WaveBudget a lender or a financing company ?",
  answer : "A : WaveBudget is not a lender or a financing company. instead, it partners with business to offer customers an affordable way to shop"
 },
 {
  question : "4. Can i use WaveBudget to shop in-store and online ?",
  answer : "A : Yes, WaveBudget can be used to make purchases both in-store and online"
 },
 {
  question : "5. Can i buy on full payment on WaveBudget's ecommerce platform or is it only for installments purchases ? ",
  answer : "A : Yes, customers can choose to either buy on credit (intsalments) or pay in full on WaveBudget's ecomerce platform. "
 }, 
 {
  question : "6. What types of items can i purchase using WaveBudget ?",
  answer : "A : WaveBudget can be used to a wide variety of items, including electronics, appliances, furniture, and more."
 }, 
 {
   question : "7. How long do i have to repay my purchases ?",
   answer : "A. WaveBudget offers repayment terms of up to 5 months."
 },
 {
  question : "8. How much can i  borrow using WaveBudget?",
  answer : "A. The amount that can be borrow using WaveBudget will depend on the individual's credit limit, which is determined by WaveBudeget based on several factors"
 },
 {
  question : "9. How does Wave Budget determine my credit limit ?",
  answer : "A. WaveBudget determine credit limit based on variety of factors, including the individual's credit history and income."
 },
 {
  question : "10. Is there a credit check required to use WaveBudget?",
  answer : "A. Yes WaveBudget requires a credit check in order to determine an individual's credit limit"
 },
 {
  question : "11. How do i sign up for WaveBudget?",
  answer : "A. You can sign up for WaveBudget by visiting the platform's websites or by downloading the mobile app."
 },
 {
  question : "12. What happens if i miss a payment?",
  answer : "A. If you miss a payment, WaveBudget will charge a late fee and may report the missed payment to credit bureaus, which could negatively impact your credit store."
 },
 {
  question : "13. Is there a penalty for paying off my purchases early?",
  answer : "A. No, there is no penalty for paying off your purchases early with WaveBudget"
 },

      ]
    }
  
};
</script>
