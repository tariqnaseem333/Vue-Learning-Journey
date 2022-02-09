<template>
  <div>
    <div v-if="job">
      <h1>{{ job.title }}</h1>
      <p>{{ job.details }}</p>
    </div>
    <div v-else>
      <p>Loading Job Details...</p>
    </div>

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
  data() {
    return {
      job: null,
    };
  },
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>