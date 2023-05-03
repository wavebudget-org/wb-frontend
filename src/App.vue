<template>
  <Header />
  <router-view />
</template>
<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;900&family=Roboto:wght@400;900&display=swap");
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #ebf6f6;
}
@import "assets/style.css";
</style>
