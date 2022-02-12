<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";

export default {
  props: ["posts"],
  components: { SinglePost },
  //To pass props in setup function and access it's value
  setup(props) {
    // console.log(props.posts);

    // Lifecycle Hooks in composition API
    onMounted(() => {
      console.log("component mounted");
    });
    onUnmounted(() => {
      console.log("component unmounted");
    });
    onUpdated(() => {
      console.log("component updated");
    });
  },
  mounted() {
    console.log("Mounted Using Options API");
  },
};
</script>

<style>
</style>