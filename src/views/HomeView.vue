<template>
  <main>
    <Hero />
    <Button btn_1="Get started" btn_2="I have a question" />
    <SectionVue />
    <Demo />
    <how-it-works></how-it-works>
  </main>

  <!-- <div class="how-it-works-section">
    <h1 class="works">HOW IT WORKS</h1>
  </div>
  <div class="grid-how-it-works">
    <div>
      <div class="how-it-work-img">
        <img src="../assets/images/profile.png" alt="" />
      </div>

      <h3 class="how-it-work-h3">Registeration</h3>
      <p class="how-it-work-p">
        Create a profile on the WaveBudget platform in less than five minutes
        without requiring complex documentation.
      </p>
    </div>
    <div>
      <div class="how-it-work-img">
        <img src="../assets/images/cart.png" alt="" />
      </div>

      <h3 class="how-it-work-h3">Choose an item to buy</h3>
      <p class="how-it-work-p">
        Select an item on the online WaveMart store or visit any of the
        partnered physical store/supermarket to select an item for purchase
      </p>
    </div>
    <div>
      <div class="how-it-work-img">
        <img src="../assets/images/payment.png" alt="" />
      </div>
      <h3 class="how-it-work-h3">Select a payment plan</h3>
      <p class="how-it-work-p">
        The item will be delivered immediately while you continue your payment
        as planned until item is fully paid or pay off the purchase.
      </p>
    </div>
    <div>
      <div class="how-it-work-img">
        <img src="../assets/images/delivery.png" alt="" />
      </div>
      <h3 class="how-it-work-h3">Delivery and payment</h3>
      <p class="how-it-work-p">
        The item will be delivered immediately while you continue your payment
        as planned until item is fully paid or pay off the purchase.
      </p>
    </div>
  </div> -->

  <section class="join-us">
    <h1 class="join-us-h1">Join Us Today!</h1>

    <article class="join-us-flex">
      <h3 class="header">Individuals</h3>
      <div class="individual-grid-1">
        <div
          class="cont"
          v-for="individual in individuals"
          :key="individual.title"
        >
          <img
            :src="require(`../assets/images/${individual.img}.png`)"
            :alt="individual.img"
          />
          <div>
            <h4>{{ individual.title }}</h4>
            <p>{{ individual.paragraph }}</p>
          </div>
        </div>
      </div>
    </article>
    <article class="join-us-flex businesses">
      <h3 class="header">Businesses</h3>
      <div class="individual-grid-1">
        <div class="cont" v-for="business in businesses" :key="business.title">
          <img
            :src="require(`../assets/images/${business.img}.png`)"
            :alt="business.img"
          />
          <div>
            <h4>{{ business.title }}</h4>
            <p>{{ business.paragraph }}</p>
          </div>
        </div>
      </div>
    </article>
  </section>

  <section>
    <div>
      <h2 class="testimony-h2">Customer Testimony</h2>
    </div>
    <div class="testimony-flex">
      <div class="testimonies">
        <p>
          Thank you for initiating a Buy Now Pay Later platform. Thank you for
          making it easier to use your platform for solving a pain point. The
          system is currently serving its purpose, a dual use for core
          profession purpose
        </p>
        <h4>From Lagos</h4>
      </div>
      <div class="testimonies">
        <p>
          The way you people are running the business is okay, just keep it up,
          may Almighty ALLAH help us all, and I really appreciate WaveBudget,
          WaveBudget is my choice.
        </p>
        <h4>From Kaduna</h4>
      </div>
      <div class="testimonies">
        <p>WaveBudget made my purchase smooth and satisfying.</p>
        <h4>From Lagos</h4>
      </div>
    </div>
  </section>
  <section class="bnpl_table">
    <div class="coming_soon">
      <h1 class="h1">WaveBudget app coming soon.</h1>
      <Button btn_1="Join the waitlist" btn_2="I have a question" />
    </div>
    <img class="phone-image" src="../assets/images/phone-app.png" alt="" />
  </section>
  <section>
    <div class="bnpl_table">
      <h3 class="waitlist-h3">Join Waitlist</h3>
      <form>
        <div class="from-div">
          <label>Name</label>
          <input type="text" />
        </div>
        <div class="from-div">
          <label>Email</label>
          <input type="email" />
        </div>
        <span class="form-btn">
          <button class="form-button">Submit</button>
        </span>
      </form>
      <h1 class="take-control">Take total control of your finance.</h1>
    </div>
  </section>
  <div class="FAQ">FAQ</div>
  <footer class="footer__">
    <div class="first_div">
      <div class="reach_out">
        <p>Reach out</p>
        <span
          ><img
            class="reach-out-image"
            src="../assets/images/g-mail.png"
            alt=""
        /></span>
      </div>
      <img class="message-img" src="../assets/images/twitter.png" alt="" />
      <img class="message-img" src="../assets/images/video.png" alt="" />
      <img class="message-img" src="../assets/images/instagram.png" alt="" />
      <img class="message-img" src="../assets/images/facebook.png" alt="" />
    </div>
    <div>
      <h3>About product</h3>
      <p>Updates</p>
      <p>Beta test</p>
    </div>
    <div>
      <h3>Resources</h3>
      <p>Help center</p>
      <p>Partners</p>
      Partners
      <p>News letters</p>
    </div>
    <p>@ Copyright {{ new Date().getFullYear() }}. All rights reserved</p>
    <p>Terms and Conditions</p>
    <p>Privacy Policy</p>
  </footer>
</template>

<script>
// @ is an alias to /src
import Hero from "../components/Hero.vue";
import Button from "../components/UI/Button.vue";
import SectionVue from "../components/SectionVue.vue";
import Demo from "../components/Demo.vue";
import HowItWorks from "../components/HowItWorks.vue";
export default {
  name: "HomeView",
  components: {
    Hero,
    Button,
    SectionVue,
    Demo,
    HowItWorks,
  },
  data() {
    return {
      individuals: [
        {
          img: "payment",
          title: "Convenient Payment",
          paragraph:
            "WaveBudget offers individuals a hassle free way to purchase items and pay for them over time. With flexible payment plans and variety of products available.",
        },
        {
          img: "setting",
          title: "100% Secure",
          paragraph:
            "WaveBudget takes your security seriously, using the latest encryption and security measures to keep your information safe. ",
        },
        {
          img: "home",
          title: "Affordable Loan",
          paragraph:
            "WaveBudget loans are designed to meet the needs of individuals with zero interest rates and repayment terms that fits your budget.",
        },
        {
          img: "profile",
          title: "Easy To Use",
          paragraph:
            "With the simple registration process and user friendly interface, WaveBidget is easy to use.",
        },
      ],
      businesses: [
        {
          img: "mountain",
          title: "Increased Sales",
          paragraph:
            "By partnering with WaveBudget , businesses can increase their sales by offering customers a convenient way to purchase items and pay for them over time",
        },
        {
          img: "speaker",
          title: "Brand Awareness",
          paragraph:
            " Partnering with WaveBudget can help business increase their brand awareness, reaching a wider audience of potential customers.",
        },
        {
          img: "human",
          title: "Easy  Onboarding",
          paragraph:
            "WaveBudget makes it easy for businesses to onboard and start offering their products through the platform, with no complex setup or integration required.",
        },
        {
          img: "delivery",
          title: "Instant Payment",
          paragraph:
            " With the simple registration process and user friendly interface, WaveBidget is easy to use.",
        },
      ],
    };
  },
  // methods: {
  //   animate() {
  //     this.interval = setInterval(() => {
  //       const index =
  //         this.current < this.carousel.length - 1 ? this.current + 1 : 0;
  //       this.current = index;
  //     }, 2000);
  //   },
  // },
  // mounted() {
  //   this.animate();
  // },
  // beforeUnmounted() {
  //   clearInterval(this.interval);
  // },
};
</script>
