<template>
  <div>
    <h1>Job Details Page</h1>
    <!-- $route: is the route object which contains the information
      about the current route including any route parameters-->
    <p>The Job id is: {{ id }}</p>
  </div>
</template>

<script>
export default {
  // we are accepting route parameter (id) as a prop in
  // jobdetails.vue component
  props: ["id"],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
};
</script>

<style>
</style>