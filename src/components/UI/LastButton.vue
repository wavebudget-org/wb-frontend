<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names-->
<!-- eslint-disable vue/valid-template-root -->
<script>
export default {
  props: ["btn_3", "btn_4"]
};
</script>
<template>
  <div class="body-btn">
    <button>
      <a href="#waitList">{{ btn_3 }}</a>
       </button>
    <button>
      <a href="https://wa.me/2348137960202?text=hello,%20"
        >{{ btn_4 }} <img src="../../assets/images/message.png" alt="message"
      /></a>
    </button>
    

  </div>
</template>
<style scoped>
.body-btn {
  display: flex;
  gap: 10px;
  margin-bottom: 50px;
  text-decoration: none;
  padding-left: 4.5rem;
  margin-top: 2rem;
}
.body-btn button {
  all: unset;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  text-align: center;
  border-radius: 12px;
  cursor: pointer;
}

.body-btn button:first-child  {
  background: #008b8b !important;
  color: #f8f8f8 !important;
  font-weight: 600 !important;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.35) !important ;
}
.body-btn button a {
  text-decoration: none;
  color: #fff;
}
.body-btn button:last-child  {
  color: #008b8b !important;
  background-color: #fff !important;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.35) !important ;
}

.body-btn button:last-child a {
  position: relative !important;
  padding: 0.9rem;
  text-decoration: none;
  color: black;
    color: #008b8b;
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
    gap: 15px;
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
