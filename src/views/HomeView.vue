<script setup>
const coming = "Coming Soon"
const Word = "Be the first to know when our site is live"
</script>

<template>
  <div class="coming">
    <div class="wave">
      <img src="../assets/images/wave_logo_.svg" alt="" />
    </div>
    <div class="coming-top">
      <h1>{{ coming }}</h1>
      <h4>{{ Word }}</h4>
    </div>
  </div>
  <div class="card-body">
    <div class="card-1">
      <h1>In-store shopping</h1>
      <h3>Buy items on credit from physical
        stores arround you.</h3>
      <div class="p-btn">
        <a href="https://wa.link/k2g1fn" class="btn-1">Get started now</a>
      </div>
    </div>
    <div class="card-2">
      <h1>Product and services.</h1>
      <p>Explore our landing page to know more about us</p>
      <div class="p-btn">
        <router-link to="/home" class="btn-2">Explore</router-link>
      </div>
    </div>

  </div>
</template>

<style scoped>
.link {
  color: blue;
}

.coming {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.wave {
  width: 100px;
  background: white;
  padding: 8px;
  border-radius: 10px;
}

.p-btn {
  display: flex;
  flex-direction: row;
}

.btn-1 {
  background: #12617a;
  color: #f8f8f8;
  font-weight: 600;
  outline: hidden;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  border: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.35);
}

.btn-2 {
  background: #008b8b;
  color: #f8f8f8;
  font-weight: 600;
  outline: hidden;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  border: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.35);
}

a {
  text-decoration: none;
  color: white;
  font-size: 15px;
  padding: 4px;
}

.card-body {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 2rem;
  /* align-items: center; */
  height: fit-content;

}

.card-1,
.card-2 {
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 10px;
  background: #008b8b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 
.card-1,
.card-2 {

  display: flex;
  justify-content: center;
  padding: 2rem;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  background: #008b8b;
}
*/
.card-2 {
  background: #12617a;

}

p {
  font-size: 20px;
  padding: 10px;
  font-weight: 300;
  text-align: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.in-store {
  font-size: 20px;
  color: white;

}

h1 {
  font-size: 3rem;
  text-align: center;
  font-weight: 700;
  /* color:#008b8b; */
  color: #ffff;
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

.coming-top h1 {
  color: #008b8b;
}



h4 {
  font-size: 25px;
  text-align: center;
  font-weight: 700;
  color: #008b8b;
  /* padding: 1rem; */
  font-family: Arial, Helvetica, sans-serif;
}

h2,
h3 {
  font-size: 20px;
  font-weight: 500;
  color: white;
  text-align: center;
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

@media screen and (max-width:768px) {
  h1 {
    font-size: 1.7rem;
  }

  .card-body {
    flex-direction: column;
  }

  .card-1,
  .card-2 {
    padding: 1rem;
  }
}
</style>
