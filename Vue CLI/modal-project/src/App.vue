<!-- templete here not in html because we might have
  diff component with diff template that we might not 
  want to show all template in index.html.
  Each component has it's own template and when we 
  render component in dom it's template will be injected. -->
<!-- Multiple root elements are allowed inside template -->
<!-- It's not a good idea to build one component and build 
    everything inside it. You should create different component for
    diff things like header, sidebar etc -->
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome...</p>
    <input type="text" ref="name" />
    <!-- Event Modifier : here right click ,shift, alt-->
    <button @click.alt="handleClick">click me (alt)</button>
    <!-- Only string can be passed inside this 
      in order to pass data like array you have to use data bind -->
    <div v-if="showModal">
      <!-- Passing header as a prop into modal component and
           : is data bind which passing dynamic value as an 
           attribute to element-->
      <!-- @close : is custom event we got from modal component -->
      <!-- Below is self closing modal tag <Modal/> -->
      <Modal
        :header="header"
        :text="text"
        :detail="['shaun', 5]"
        theme="sale"
        @close="toggleModal"
      />
      <!-- here this h1 and p template will be passed as 
      slot to the modal component -->
      <!-- teleporting this modal  -->
      <teleport to=".modals" theme="sale" @close="toggleModal">
        <!-- named slot that we want to go in Modal component-->
        <template v-slot: links>
          <a href="#">Sign Up Now</a>
          <a href="#">More Info</a>
        </template>
        <h1>Vue Learning</h1>
        <p>A JavaScript Framework</p>
      </teleport>
    </div>
    <button @click="toggleModal">open modal</button>
  </div>
</template>

<script>
// Importing into our root component
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  // Registering our imported component into our root component
  components: { Modal },
  // We can data and methods as we did in CDN
  data() {
    return {
      title: "My First Vue App :)",
      header: "sign up",
      text: "It is a Vue Website",
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      // this.$refs.name : will give you the reference of the
      // element from template
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<!-- These root styles will be applied to every component.
      To avoid that use style scoped or make selector more
      specific
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

<!-- Props are used to transfer data from parent component to 
      child component. Instead of hardcoding data into elements 
      passed it through which are reusable in different parts of app.
    Single Source of Truth: Define data once in parent and then use it everywhere -->

<!-- teleport component will allow you to teleport your content
     from vue app to different part of the dom completely maybe 
     outside of the scope of vuteleport -->
