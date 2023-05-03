<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names-->
<!-- eslint-disable vue/valid-template-root -->
<script>
export default {
  data() {
    return {
      mobileView: false,
    };
  },
  methods: {
    toggleMobile() {
      this.mobileView = !this.mobileView;
    },
  },
};
</script>
<template>
  <header class="top-header">
    <div>
      <div class="logo">
        <img src="../assets/images/wave-logo.png" alt="" />
        <span class="logo-span">WAVE <br />BUDGET</span>
      </div>
    </div>

    <nav class="flex">
      <ul class="header-navigation">
        <router-link class="links" to="/">Home</router-link>
        <router-link class="links" to="/">Shop</router-link>
        <router-link class="links" to="/">Invest</router-link>
      </ul>

      <button class="join-btn">Join waitlist</button>
    </nav>
    <div class="drop-down">
      <img
        class="drop-img"
        @click="toggleMobile"
        src="../assets/images/wave-dropdown.png"
        alt=""
      />
    </div>
  </header>
  <ul class="responsive-li" :class="{ 'responsive-slide': mobileView }">
    <li><router-link class="nav-list" to="/">Home</router-link></li>
    <li>
      <router-link class="nav-list" to="/">Shop</router-link>
    </li>
    <li>
      <router-link class="nav-list" to="/">Invest</router-link>
    </li>
    <button @click="toggleMobile">X</button>
  </ul>
</template>
<style scoped>
header {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 10000;
  top: 0;
  background-color: rgba(235, 246, 246, 0.9);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.015);
  align-items: center;
  padding: 0 4.5rem;
}
.logo {
  display: flex;
  position: relative;
  width: 160px;
  left: -50px;
}

.logo-span {
  display: flex;
  position: absolute;
  top: 10%;
  right: -20px;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 600;
  color: #12617a;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.responsive-li,
.flex ul {
  list-style-type: none;
}
.flex ul {
  display: flex;

  gap: 20px;
  align-items: end;
}
.flex button {
  all: unset;
  padding: 0.5rem 2rem;
  background: #12617a;
  color: #fff;
  border-radius: 16px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}
.flex a {
  all: unset;
  text-decoration: none;
  color: rgba(22, 23, 24, 0.5);
  cursor: pointer;
  font-weight: 600;
}

a.links:active,
.links:hover {
  color: #12617a;
}
.responsive-li {
  background: #263959;
  max-width: 100%;
  color: #fff;
  height: 100px;
  text-align: center;
  padding: 20px;

  display: none;
  position: relative;
}
.nav-list {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

.drop-down {
  display: none;
}
@media screen and (max-width: 780px) {
  header {
    grid-template-columns: 40% 60%;
  }
}
@media screen and (max-width: 720px) {
  header {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
  }

  .drop-down {
    display: block;
    cursor: pointer;
  }
  .responsive-li button {
    all: unset;
    cursor: pointer;
    font-weight: bold;
    position: absolute;
    top: 0;
    right: 10px;
  }
  nav {
    display: none !important;
  }

  .responsive-li {
    background: #263959;
    max-width: 100%;
    position: fixed;
    z-index: 10000;
    left: 0;
    right: 0;
    top: 50px;
    color: #fff;
    height: 100px;
    text-align: center;
    padding: 20px;
    margin-top: -30px;

    display: none;
    top: 0;
  }

  .responsive-slide {
    margin-top: 1px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: all 0.6s ease;
    padding: 4rem 0 !important;
  }
}
</style>
