<template>
  <div class="home">
    <h1>Welcome {{ name }}</h1>
    <router-link to="/about">About</router-link>
    <br />
    <br />
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase";

export default {
  setup() {
    const name = ref("");

    onBeforeMount(() => {
      // here we are trying to find the whether current user
      // is logged in or not
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Sign Out");
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    return { name, Logout };
  },
};
</script>


