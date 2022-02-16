<template>
  <div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner";
import { useRoute } from "vue-router";

export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    // useRoute will give you the info about the url
    // you are currently on
    const route = useRoute();
    console.log(route);
    const { post, error, load } = getPost(route.params.id);

    load();

    return { post, error };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>