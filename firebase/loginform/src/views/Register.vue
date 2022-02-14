<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="Register">
      <input type="email" placeholder="Email" v-model="email" />
      <br />
      <br />
      <input type="password" placeholder="Password" v-model="password" />
      <br />
      <br />
      <input type="submit" value="Register" />
      <p>Have an Account? <router-link to="/login">Login Here</router-link></p>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          alert(user);
        })
        .catch((err) => alert(err.message));
    };
    return { email, password, Register };
  },
};
</script>

<style>
</style>