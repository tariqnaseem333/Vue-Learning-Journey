<!-- templete here not in html because we might have
  diff component with diff template that we might not 
  ant to show all template in index.html.
  Each component has it's own template and when we 
  render component in dom it's templste will be injected. -->
<!-- Multiple root elements are allowed inside template -->
<!-- It's not a good idea to build one component and build 
    everything inside it. You should create different component for
    diff things like header, sidebar etc -->
<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
  <Modal />
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  // We can data and methods as we did in CDN
  data() {
    return {
      title: "My First Vue App :)",
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
  },
};
</script>

<!-- These styles will be applied to every component.
    All the images will be placed inside the assets folder -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>

<!-- npm install: this command will download all the project 
     dependencies listed inside the package.json file.
     npm run serve: this command will run your project
     with localhost detail-->

<!-- In regular js, we use query selector to grab the
     element.
     In Vue App, we use template refs as an attribute to html 
     element which will allow us to store a reference to 
     element inside a variable-->
