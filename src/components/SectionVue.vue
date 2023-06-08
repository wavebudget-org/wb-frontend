<template>
<section class="shop_now">
  <div class="grid_shop_now">
   <div class="shop_section">
        <h3 class="h3">Split Payment in 5 parts</h3>
        <p>
          Spread payment on items to meet other needs that matters, pay back in
          installments at zero interest rate
        </p>
        <span>
          Items you can buy on installments includes; food items, laptops,
          phones, furniture, home appliances, houses and much more.
        </span>
  </div>
   <div class="shop_section">
        <h3 class="h3">Earn up to 5000naira!</h3>
        <p>Earn up to 5000 as a WaveBudget agent.</p>
        <span class="span">
          Invite friends to shop on WaveBudget and get rewarded for it.Refer us
          now.
        </span>
      </div>
      <button class="grid_btn">Shop</button>
  </div>
  <div class="grid_invest">
    <h3>Micro investment.</h3>
    <div class="invest-section">
      <p class="grid-invest-p">Earn passive income as you use our services.</p>
      <span class="grid-invest-p">
        Deposit as low as 10,000naira in your GAD account and watch your money
        grow. Invest now
      </span>
      </div>
      <button class="grid_btn">Invest Now</button>
  </div>
</section>
</template>
<style scoped>
.shop_now {
  display: grid;
  grid-template-columns: 60% 38%;
  gap: 1.5%;
}
 .grid_shop_now {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  background: #008b8b;
  color: #ffff;
  width: 100%;
  padding: 2rem 4.5rem;
 }
 
 .grid_invest {
  background: #12617a;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 50px;
  color: #fff;
 }
 .invest-section {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
 }
 .shop_section {
display: flex;
flex-direction: column;
padding: 10px;
gap: 3rem;

 }
 .span {
  margin-top: 2.3rem;
   font-weight: 300;
 }

button {
  margin-top: 10px;
}
.grid_btn {
  all: unset;
  grid-column: 1 / span 2;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  background: #ffff;
  padding: 10px 40px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  color: #008b8b;
  margin: 10px auto;
  width: 60%;

}
@media screen and (max-width: 720px) {
  .shop_now {
    grid-template-columns: 100%;
    gap: 2rem;
    justify-content: center;
  }
  .grid_shop_now {
  display: flex;
  flex-direction: column;
  justify-content: center;

 }
 .h3 {
   margin-top: 20px; 
 }
 

  .grid-btn {
    grid-column: 1 / span 2;
    width: initial;
    text-align: center;
  }
  .grid_invest {
    text-align: center;
  }
}
@media screen and (max-width: 520px) {
  .shop-now  {
 
    gap: 2rem;
    justify-content: center;

    text-align: center;
  }
  .grid-btn {
    grid-column: 1 / span 1;
  }
}
@media screen and (max-width: 1026px) {
 .shop_section {
display: flex;
flex-direction: column;
gap: 3rem;

 }
 .span {
   font-weight: 300;
   /* padding-left: 15px; */
 }
}

@media screen and (max-width: 760px) { 
   .shop_section {
display: flex;
flex-direction: column;
gap: 3rem;

 }
 .span {
   font-weight: 300;
   /* padding-left: 15px; */
 }
}

</style>
