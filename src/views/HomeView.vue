<template>
  <header class="top-header">
    <div class="logo">
      <img src="../assets/images/wave-logo.png" alt="" />
      <span class="logo-span">WAVE <br />BUDGET</span>
    </div>
    <div class="flex">
      <nav class="header-navigation">
        <router-link class="links" to="/">Home</router-link>
        <router-link class="links" to="/shopComponents">Shop</router-link>
        <router-link class="links" to="/investComponents">Invest</router-link>
      </nav>

      <button class="join-btn">Join waitlist</button>
    </div>
    <div class="drop-down">
      <img
        @click="mobileNavMenu = !mobileNavMenu"
        src="../assets/images/wave-dropdown.png"
        alt=""
      />
    </div>
  </header>
  <ul class="responsive-li" :class="{ 'responsive-slide': mobileNavMenu }">
    <li><router-link class="nav-list" to="/">Home</router-link></li>
    <li>
      <router-link class="nav-list" to="/shopComponents">Shop</router-link>
    </li>
    <li>
      <router-link class="nav-list" to="/investComponents">Invest</router-link>
    </li>
  </ul>
  <section class="body-section">
    <div class="body-title">
      <h1 class="body-h1">Buy now<br />Everything<br />Easily</h1>
      <p class="body-paragraph">
        Pay now, pay later for items to reach <br />
        other needs that matter, pay back with <br />
        0% intrest rate
      </p>
    </div>
    <div class="body-image">
      <img src="../assets/images/wrist-watch.png" alt="image_alt" />
    </div>
  </section>
  <div class="body-btn">
    <button class="btn-body1">Get started</button>
    <button class="btn-body2">I have a question</button>
    <span class="message-logo"
      ><img src="../assets/images/message.png" alt=""
    /></span>
  </div>
  <section class="shop-now">
    <article class="grid-shop-now">
      <h1>
        Split Payment in <br />
        in 5 parts
      </h1>
      <p>
        Spread payment on items to meet other needs that matters, pay back in
        installments at zero interest rate
      </p>
      <p>
        Items you can buy on onstallments includes; food items, laptops, phones,
        furniture, home appliances, houses and much more.
      </p>
    </article>
    <article class="grid-shop-now">
      <h1 class="grid-shop-h1">Earn up to 5000naira!</h1>
      <p class="grid-shop-p">Earn up to 5000 as a WaveBudget agent.</p>
      <p class="grid-shop-p">
        Invite friends to shop on WaveBudget and get rewarded for it.Refer us
        now.
      </p>
      <div class="grid-show-btn">
        <button class="grid-btn">Shop now</button>
      </div>
    </article>
    <article class="grid-invest">
      <h1 class="grid-invest-h1">Micro investment</h1>
      <p class="grid-invest-p">Earn passive income as you use our services.</p>
      <p class="grid-invest-p">
        Deposit as low as 10,000naira in your GAD account and watch your money
        grow. Invest now
      </p>
      <div class="grid-invest-btn">
        <button class="grid-btn">Invest now</button>
      </div>
    </article>
  </section>
  <div class="demo-section">
    <h1 class="demo-h1">TRY A DEMO</h1>
    <p class="demo-p">BNPL Calculator</p>
    <div class="bnpl-calculator">
      <form class="calculator-form">
        <div class="form-tag">
          <label>What is your monthly income?</label>
          <input
            type="text"
            placeholder="This information is important to get your credit limit"
          />
        </div>
        <div class="form-tag">
          <label> What item do you want to buy? </label>
          <input type="text" placeholder="" />
        </div>
        <div class="form-tag">
          <label>What is the item price range?</label>
          <input type="text" />
        </div>
        <div class="form-tag">
          <label>Select a payment term</label>
          <input type="text" />
        </div>
        <div class="bnpl-btn">
          <button class="btn-generate">Generate</button>
        </div>
      </form>

      <!-- <div class="phone-image"> -->
      <img class="phone-image" src="../assets/images/phone.png" alt="" />
      <!-- </div> -->
    </div>
  </div>
  <div class="how-it-works-section">
    <h1 class="works">HOW IT WORKS</h1>
  </div>
  <div class="grid-how-it-works">
    <div>
      <img class="how-it-work-img" src="../assets/images/profile.png" alt="" />
      <h3 class="how-it-work-h3">Registeration</h3>
      <p class="how-it-work-p">
        Create a profile on the WaveBudget platform in less than five minutes
        without requiring complex documentation.
      </p>
    </div>
    <div>
      <img class="how-it-work-img" src="../assets/images/cart.png" alt="" />
      <h3 class="how-it-work-h3">Choose an item to buy</h3>
      <p class="how-it-work-p">
        Select an item on the online WaveMart store or visit any of the
        partnered physical store/supermarket to select an item for purchase
      </p>
    </div>
    <div>
      <img class="how-it-work-img" src="../assets/images/payment.png" alt="" />
      <h3 class="how-it-work-h3">Select a payment plan</h3>
      <p class="how-it-work-p">
        The item will be delivered immediately while you continue your payment
        as planned until item is fully paid or pay off the purchase.
      </p>
    </div>
    <div>
      <img class="how-it-work-img" src="../assets/images/delivery.png" alt="" />
      <h3 class="how-it-work-h3">Delivery and payment</h3>
      <p class="how-it-work-p">
        The item will be delivered immediately while you continue your payment
        as planned until item is fully paid or pay off the purchase.
      </p>
    </div>
  </div>
  <div class="join-us">
    <h1 class="join-us-h1" >Join Us Today</h1>
  </div>
  <main class="main-flex">
    <div class="individual">Individual</div>
  <div class="business">Bussiness</div>
  </main>
  
  <section class="join-us-flex">
   <div class="individual-grid-1">
    <div class="flex-part">
     <div> <img class="flex-image" src="../assets/images/payment.png" alt=""></div>
    <div> 
    <h3 class="flex-part-h3">Convenient Payment </h3>
    <p class="flex-part-p">WaveBudget offers individuals a hassle free way to purchase items and pay for them over 
      time. With flexible payment plans
       and variety of products available.</p>
    </div>
    </div>
      <div class="flex-part-1">
     <div> <img class="flex-image" src="../assets/images/setting.png" alt=""></div>
    <div> 
    <h3 class="flex-part-h3">100% Secure </h3>
    <p class="flex-part-p">WaveBudget takes your security seriously, using the latest encryption and 
      security measures to keep your information safe. </p>
    </div>
</div>
 <div class="flex-part-1">
     <div> <img class="flex-image" src="../assets/images/home.png" alt=""></div>
    <div> 
    <h3 class="flex-part-h3">Affordable Loan</h3>
    <p class="flex-part-p">WaveBudget loans are designed to meet the needs of individuals with zero interest
       rates and repayment terms that fits your budget. </p>
    </div>
</div>
<div class="flex-part">
     <div> <img class="flex-image" src="../assets/images/profile.png" alt=""></div>
    <div> 
    <h3 class="flex-part-h3">Easy To Use</h3>
    <p class="flex-part-p">With the simple registration process and user friendly interface, 
      WaveBidget is easy to use.</p>
    </div>
</div>
   </div>
   <div class="individual-grid-2">
    <div class="flex-part">
     <div> <img class="flex-image" src="../assets/images/mountain.png" alt=""></div>
    <div> 
    <h3 class="flex-part-h3">Convenient Payment </h3>
    <p class="flex-part-p">WaveBudget offers individuals a hassle free way to purchase items and pay for them over 
      time. With flexible payment plans
       and variety of products available.</p>
    </div>
    </div>
      <div class="flex-part-1">
     <div> <img class="flex-image" src="../assets/images/speaker.png" alt=""></div>
    <div> 
    <h3 class="flex-part-h3">100% Secure </h3>
    <p class="flex-part-p">WaveBudget takes your security seriously, using the latest encryption and 
      security measures to keep your information safe. </p>
    </div>
</div>
 <div class="flex-part-1">
     <div> <img class="flex-image" src="../assets/images/human.png" alt=""></div>
    <div> 
    <h3 class="flex-part-h3">Affordable Loan</h3>
    <p class="flex-part-p">WaveBudget loans are designed to meet the needs of individuals with zero interest
       rates and repayment terms that fits your budget. </p>
    </div>
</div>
<div class="flex-part">
     <div> <img class="flex-image" src="../assets/images/delivery.png" alt=""></div>
    <div> 
    <h3 class="flex-part-h3">Instant Payment</h3>
    <p class="flex-part-p">With the simple registration process and user friendly interface, 
      WaveBidget is easy to use.</p>
    </div>
</div>

   </div>
  </section>
  <section>
    <div>
      <h2 class="testimony-h2">Customer Testimony</h2>
    </div>
    <div class="testimony-flex">
       <div class="testimonies">
        <h4 class="testimony-h4">Thank you for initiating a Buy Now Pay Later platform.
Thank you for making it easier to use your platform for solving a pain point.
The system is currently serving its purpose, a dual use for core profession purpose</h4>
<p class="testimony-p">From  Lagos</p>
       </div>
        <div class="testimonies">
        <h4 class="testimony-h4">The way you  people are running the business is okay, just keep it up, may Almighty ALLAH help us all,
           and I really appreciate WaveBudget, WaveBudget is my choice. </h4>
<p class="testimony-p"> From  Lagos</p>
       </div>
        <div class="testimonies">
        <h4 class="testimony-h4" >WaveBudget made my purchase smooth and satisfying.</h4>
<p class="testimony-p">From  Lagos</p>
       </div>
    </div>
  </section>
  <section class="app-flex">
     <div>
      <h1 class="wave-app">WaveBudget app <br>
     coming soon.
     </h1>
    <div class="app-btn">
    <button class="btn-body1">Get started</button>
    <button class="btn-body2">I have a question</button>
    <span class="message-logo-2"
      ><img src="../assets/images/message.png" alt=""
    /></span>
    </div>
     </div>
     <div>
      <img class="phone-image" src="../assets/images/phone-app.png" alt="">
     </div>
  </section>
  <section class="form-flex">
    <div>
    <h3 class="waitlist-h3">Join Waitlist</h3>
    <form class="last-form">
     <div>
       <label>Name</label>
      <input type="text">
     </div>
     <div>
       <label>Email</label>
      <input type="text">
     </div>
     <div class="form-btn">
      <button class="form-button">Submit</button>
     </div>
    </form>
    </div>
    <div>
      <h1 class="take-control">Take total control of your finance.</h1>
    </div>
  </section>
  <div class="FAQ">FAQ</div>
  <section class="footer-section" >
  <footer>
    <div class="footer-message"> 
     <p class="reach-out">Reach out
     <span><img class="reach-out-image" src="../assets/images/g-mail.png" alt=""></span>
     </p>
     <img class="message-img" src="../assets/images/twitter.png" alt="">
     <img class="message-img" src="../assets/images/video.png" alt="">
     <img class="message-img" src="../assets/images/instagram.png" alt="">
     <img class="message-img" src="../assets/images/facebook.png" alt="">
    </div>
    <div>
      <h3>About product</h3>
      <p>Updates
       Beta test
</p>
    </div>
    <div>
      <h3>Resources</h3>
      <p>Help center
Partners
News letters</p>
    </div>
  </footer>
  <footer class="@-section">
    <p class="@-section">@
      <span>Copyright 2023. All rights reserved</span>
    </p>
    <p>Terms and Conditions</p>
    <p>Privacy Policy</p>
    
  </footer>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      mobileNavMenu: false,
    };
  },
};
</script>
