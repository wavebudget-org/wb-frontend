<template>
  <section class="shop-now">
    <article class="grid-shop-now">
      <div>
        <h3>Split Payment in in 5 parts</h3>
        <p>
          Spread payment on items to meet other needs that matters, pay back in
          installments at zero interest rate
        </p>
        <span>
          Items you can buy on onstallments includes; food items, laptops,
          phones, furniture, home appliances, houses and much more.
        </span>
      </div>
      <div>
        <h3>Earn up to 5000naira!</h3>
        <p class="grid-shop-p">Earn up to 5000 as a WaveBudget agent.</p>
        <span class="grid-shop-p">
          Invite friends to shop on WaveBudget and get rewarded for it.Refer us
          now.
        </span>
      </div>
      <button class="grid-btn">Shop now</button>
    </article>
    <article class="grid-invest">
      <h3>Micro investment</h3>
      <p class="grid-invest-p">Earn passive income as you use our services.</p>
      <span class="grid-invest-p">
        Deposit as low as 10,000naira in your GAD account and watch your money
        grow. Invest now
      </span>

      <button class="grid-btn">Invest now</button>
    </article>
  </section>
</template>
<style scoped>
.shop-now {
  display: grid;
  grid-template-columns: 60% 38%;
  gap: 1.5%;
}
.shop-now article {
  padding-top: 2rem;
}
.shop-now article:first-child {
  padding: 2rem 4.5rem;
  column-gap: 4rem;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  row-gap: 2rem;
}
.shop-now article:first-child div,
.grid-invest {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  justify-content: space-between;
}
.shop-now article:last-child {
  padding-right: 4.5rem;
}
.grid-btn {
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
  margin: 0 auto;
  width: 60%;
}
article span {
  font-weight: 300;
}
.grid-shop-now {
  background: #008b8b;
  width: 100%;
  padding: 20px;
  color: #ffff;
}
.grid-invest {
  background: #12617a;
  padding: 20px;
  color: #fff;
  gap: 20px;
}



@media screen and (max-width: 720px) {
  .shop-now {
    grid-template-columns: 100%;
    gap: 2rem;
  }
  .shop-now article:first-child {
    padding-left: 2rem;
  }
  .shop-now article:last-child {
    padding-right: 2rem;
  }
  .shop-now article:first-child,
  .grid-invest {
    border-radius: 12px;
  }

  .grid-btn {
    grid-column: 1 / span 2;
    width: initial;
    text-align: center;
  }
  .grid-invest {
    text-align: center;
  }
}
@media screen and (max-width: 520px) {
  .shop-now article:first-child,
  .grid-invest {
    grid-template-columns: 100%;
    text-align: center;
  }
  .grid-btn {
    grid-column: 1 / span 1;
  }
}
</style>
