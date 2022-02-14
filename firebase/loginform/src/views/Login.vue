<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="Login">
      <input type="email" placeholder="Email" v-model="email" />
      <br />
      <br />
      <input type="password" placeholder="Password" v-model="password" />
      <br />
      <br />
      <input type="submit" value="Login" />
      <p>
        Need an Account? <router-link to="/register">Register Here</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((err) => alert(err.message));
    };
    return { Login, email, password };
  },
};
</script>

<style>
</style>