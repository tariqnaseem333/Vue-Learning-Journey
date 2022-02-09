<template>
  <div>
    <!-- this div will appear in every single page -->
    <div id="nav">
      <!-- these router link will help you to route through
      diff components without making a req to the server -->
      <router-link to="/">Home</router-link> |
      <!-- give the same name as in router index.js  -->
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
    </div>
    <!-- here our route component will be dynamically 
      injected depending on the route you visit -->

    <button @click="redirect">Redirect</button>
    <button @click="back">Go Back</button>
    <button @click="forward">Go Forward</button>

    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      // sending the user to a particular url
      this.$router.push({ name: "Home" });
    },
    back() {
      // $router is used when we want to move around the route
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>


<!-- anything that is not very specific to page build it inside the
     components folder -->


