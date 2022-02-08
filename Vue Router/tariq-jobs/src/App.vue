<template>
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
  <router-view />
</template>

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
</style>


<!-- anything that is not very specific to page build it inside the
     components folder -->
