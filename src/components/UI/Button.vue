<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names-->
<!-- eslint-disable vue/valid-template-root -->
<script>
export default {
  props: ["btn_1", "btn_2"],
};
</script>
<template>
  <div class="body-btn">
    <button>{{ btn_1 }}</button>
    <button>
      <span
        >{{ btn_2 }} <img src="../../assets/images/message.png" alt="message"
      /></span>
    </button>
  </div>
</template>
<style scoped>
.body-btn {
  display: flex;
  gap: 10px;
  margin-bottom: 50px;
  padding-left: 4.5rem;
  margin-top: 2rem;
}
.body-btn button {
  all: unset;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  text-align: center;
  border-radius: 12px;
  cursor: pointer;
}

.body-btn button:first-child {
  background: #008b8b !important;
  color: #f8f8f8 !important;
  font-weight: 600 !important;
}

.body-btn button:last-child {
  color: #008b8b !important;
  background-color: #fff !important;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.35) !important ;
}

.body-btn button:last-child span {
  position: relative !important;
  padding: 0.9rem;
  margin-left: -1rem;
}

.body-btn button:last-child img {
  width: 15px;
  position: absolute;
  top: 40%;
  margin-left: 0.5rem;
}
@media screen and (max-width: 720px) {
  .body-btn {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
    width: 100%;
    margin-left: 0;
    padding-left: 2rem;
  }
}
@media screen and (max-width: 520px) {
  .body-btn {
    padding-left: 1rem;
  }
}
</style>
