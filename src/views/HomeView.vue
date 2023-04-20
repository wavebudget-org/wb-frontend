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
      <h1 class="body-h1">Pay for<br />Everything<br />Easily</h1>
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
  <div class="shop-now">
    <div class="grid-shop-now">
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
    </div>
    <div class="grid-shop-now">
      <h1 class="grid-shop-h1">Earn up to 5000naira!</h1>
      <p class="grid-shop-p">Earn up to 5000 as a WaveBudget agent.</p>
      <p class="grid-shop-p">
        Invite friends to shop on WaveBudget and get rewarded for it.Refer us
        now.
      </p>
      <div class="grid-show-btn">
        <button class="grid-btn">Shop now</button>
      </div>
    </div>
    <div class="grid-invest">
      <h1 class="grid-invest-h1">Micro investment</h1>
      <p class="grid-invest-p">Earn passive income as you use our services.</p>
      <p class="grid-invest-p">
        Deposit as low as 10,000naira in your GAD account and watch your money
        grow. Invest now
      </p>
      <div class="grid-invest-btn">
        <button class="grid-btn">Invest now</button>
      </div>
    </div>
  </div>
  <div class="demo-section">
    <h1 class="demo-h1">TRY A DEMO</h1>
    <p class="demo-p">BNPL Calculator</p>
    <div class="bnpl-calculator">
      <div>
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
      </div>
      <div class="phone-image">
        <img src="../assets/images/phone.png" alt="" />
      </div>
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
        as planned untill item is fully paid or pay off the purchase.
      </p>
    </div>
    <div>
      <img class="how-it-work-img" src="../assets/images/delivery.png" alt="" />
      <h3 class="how-it-work-h3">Delivery and payment</h3>
      <p class="how-it-work-p">
        The item will be delivered immediately while you continue your payment
        as planned untill item is fully paid or pay off the purchase.
      </p>
    </div>
  </div>
  <div class="join-us">
    <h1>Join Us</h1>
  </div>
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
