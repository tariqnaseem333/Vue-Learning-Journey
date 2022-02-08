<template>
  <h1>Job Details Page</h1>
  <!-- $route: is the route object which contains the information
      about the current route including any route parameters-->
  <p>The Job id is: {{ id }}</p>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>