<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names-->
<!-- eslint-disable vue/valid-template-root -->
<template>
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

      <p>News letters</p>
    </div>
    <p>&#169; Copyright {{ new Date().getFullYear() }}. All rights reserved</p>
    <p>Terms and Conditions</p>
    <p>Privacy Policy</p>
  </footer>
</template>
<style scoped>
.footer__ {
  display: grid;
  grid-template-columns: 50% 25% 25%;
  row-gap: 2rem;
  width: 100%;
  justify-content: space-around;
  background-color: #008b8b;
  /* padding: 3rem 1rem 2rem 1rem; */
  color: #fff;
  padding: 2rem 4.5rem;
}

.footer__ h3 {
  margin-bottom: 1rem;
}

.first_div {
  display: flex;
  justify-content: space-between;
  width: 75%;
  gap: 1rem;
  align-items: center;
}

.reach_out {
  position: relative;
  border-radius: 10px;
  color: #fff;
  border: 1px solid #fff;
  flex-grow: 3;
  margin: auto 0;
  padding: 0.5rem;
}

.footer__ img {
  width: 25px !important;
  height: 25px;
}

.reach_out span {
  position: absolute;
  top: 5px;
  right: 2px;
  background-color: #fff;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  padding: 0.3rem;
}

.reach_out img {
  width: 100%;
  height: 100% !important;
}
@media screen and (max-width: 720px) {
  .footer-message {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 10px;
    padding: 10px;
  }
  .footer-img {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .footer-resources h3 {
    display: grid;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px;
  }
  .footer__ {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 3rem;
    padding: 3rem 2rem;
  }

  .footer__ p {
    font-size: 16px;
  }

  .first_div {
    margin: 0 auto;
    width: 65%;
  }
}
@media screen and (max-width: 540px) {
  .first_div {
    width: 90%;
  }
}
</style>
