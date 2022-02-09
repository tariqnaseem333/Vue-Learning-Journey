<template>
  <div>
    <h1>Jobs</h1>
    <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="job">
        <!-- We can pass the parameters in router-link to attribute  -->
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
          <h2>{{ job.title }}</h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      <p>Loading Job Details...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
      // in real life scenario our data will be coming from the
      // database instead of directly entering data into component
      // jobs: [
      //   { title: "UX Designer", id: 1, deails: "lorem" },
      //   { title: "Web Developer", id: 2, deails: "lorem" },
      //   { title: "Vue Developer", id: 3, deails: "lorem" },
      // ],
    };
  },
  mounted() {
    // fetch will fetch the data for us return it into json format
    // and to acually get the data we will use resolve into json
    // this is asynchronous and will return promise
    // if there is something wrong with the async task we use
    // catch which will be fired if there is an error
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>