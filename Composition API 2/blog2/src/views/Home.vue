<template>
  <div class="home">
    <h1>Home</h1>
    <Navbar />
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList v-if="showPosts" :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
    <!-- <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a Post</button> -->
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts.js";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    // const posts = ref([
    //   {
    //     title: "Welcome to the Blog",
    //     body: "Lorem Ipsum: lorem is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    //     id: 1,
    //   },
    //   { title: "Top 5 Tips", body: "Lorem Ipsum", id: 2 },
    // ]);
    const showPosts = ref(true);

    // Fetching Data in setup()

    // const posts = ref([]);
    // const error = ref(null);

    // what if you want to fetch the same data in different
    // components of the website. We can put all this logic
    // in a separate function can be used in different
    // components of the website by importing it and invoking
    // in setup hook.Define once, use mutiple times

    const { posts, error, load } = getPosts();

    load();

    // const load = async () => {
    //   try {
    //     let data = await fetch("http://localhost:3000/posts");
    //     if (!data.ok) {
    //       // when we throw an error in try block then catch block
    //       // will catch the error and update value of error
    //       throw Error("No Data Available");
    //     }
    //     posts.value = await data.json();
    //   } catch (err) {
    //     error.value = err.message;
    //     console.log(error.value);
    //   }
    // };

    // load();

    return { posts, showPosts, error };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
