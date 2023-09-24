<template>
  <section>
    <div class="bnpl_table">
      <h3 class="waitlist-h3">Join Waitlist</h3>
      <form @submit="Submit">
        <div class="form-control">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div class="form-control">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <span class="form-btn">
          <button class="form-button submit">Submit</button>
        </span>
      </form>
      <h1 class="take-control">
        Take total<br />
        control of<br />
        your<br />
        finance.
      </h1>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue"
const email = ref("")
const name = ref ("")

const Submit = () => {
  email.value = email
  name.value = name
}
</script>

