<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <h2>{{ job.title }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "UX Designer", id: 1, deails: "lorem" },
        { title: "Web Developer", id: 2, deails: "lorem" },
        { title: "Vue Developer", id: 3, deails: "lorem" },
      ],
    };
  },
};
</script>

<style>
</style>