<template>
  <section>
    <h1>Frequently Asked Questions</h1>
    <ul>
      <QuestionList
        v-for="(question, index) in questions"
        :key="index"
        :question="question.question"
        :answer="question.answer"
      />
    </ul>
  </section>
</template>
<script>
import QuestionList from "../components/UI/QuestionList.vue";
export default {
  components: {
    QuestionList,
  },
  data() {
    return {
      questions: [
        {
          question: "What is WaveBudget ?",
          answer:
            "WaveBudget is a commerce-enabled technology platform that provides affordable shopping credit to consumers and empowers businesses to sell in installments.",
        },
        {
          question: "How does WaveBudget works ?",
          answer:
            "WaveBudget allows consumer to shop for items and pay installments over time.The platform charges a 10% markup on the purchase price and offers repayment terms of up to 5 months.  .",
        },
        {
          question: "Is WaveBudget a lender or a financing company ?",
          answer:
            "WaveBudget is not a lender or a financing company. instead, it partners with business to offer customers an affordable way to shop",
        },
        {
          question: "Can i use WaveBudget to shop in-store and online ?",
          answer:
            "Yes, WaveBudget can be used to make purchases both in-store and online",
        },
        {
          question:
            "Can i buy on full payment on WaveBudget's ecommerce platform or is it only for installments purchases ? ",
          answer:
            "Yes, customers can choose to either buy on credit (intsalments) or pay in full on WaveBudget's ecomerce platform. ",
        },
        {
          question: "What types of items can i purchase using WaveBudget ?",
          answer:
            "WaveBudget can be used to a wide variety of items, including electronics, appliances, furniture, and more.",
        },
        {
          question: "How long do i have to repay my purchases ?",
          answer: "WaveBudget offers repayment terms of up to 5 months.",
        },
        {
          question: "How much can i  borrow using WaveBudget?",
          answer:
            "The amount that can be borrow using WaveBudget will depend on the individual's credit limit, which is determined by WaveBudeget based on several factors",
        },
        {
          question: "How does Wave Budget determine my credit limit ?",
          answer:
            "WaveBudget determine credit limit based on variety of factors, including the individual's credit history and income.",
        },
        {
          question: "Is there a credit check required to use WaveBudget?",
          answer:
            "Yes WaveBudget requires a credit check in order to determine an individual's credit limit",
        },
        {
          question: "How do i sign up for WaveBudget?",
          answer:
            "You can sign up for WaveBudget by visiting the platform's websites or by downloading the mobile app.",
        },
        {
          question: "What happens if i miss a payment?",
          answer:
            "If you miss a payment, WaveBudget will charge a late fee and may report the missed payment to credit bureaus, which could negatively impact your credit store.",
        },
        {
          question: "Is there a penalty for paying off my purchases early?",
          answer:
            "No, there is no penalty for paying off your purchases early with WaveBudget",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
section {
  padding: 2rem 4rem;
  h1 {
    text-align: center;
    font-weight: bold;
    margin: 2rem 0;
    color: #12617a;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 720px) {
  section {
    padding: 2rem;
  }
}
</style>
