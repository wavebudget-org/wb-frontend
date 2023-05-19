<template>
  <li>
    <p>
      <span :style="{ color: show === true ? '#12617a' : '#008b8b' }">{{
        question
      }}</span
      ><button v-on:click="toggleBtn">{{ show === false ? "+" : "-" }}</button>
    </p>
    <span class="span" v-show="show">{{ answer }}</span>
  </li>
</template>
<script>
export default {
  props: ["question", "answer"],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleBtn() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="scss" scoped>
li {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  padding: 0.5rem 1rem;
}
p {
  position: relative;

  font-weight: 900;
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    all: unset;
    font-weight: 900;
    cursor: pointer;
  }
}
.span {
  opacity: 0.5;
}
</style>
