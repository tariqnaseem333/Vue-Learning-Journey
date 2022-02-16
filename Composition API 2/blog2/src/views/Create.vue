<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required />
      <label>Content:</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit enter to add a tag)</label>
      <input v-model="tag" type="text" @keydown.enter.prevent="handleKeyDown" />
      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
// useRouter here is a function which will return an
// instance of router
import { useRouter } from "vue-router";

export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    // we cannot use this.$router inside the setup()
    // we storing the instance of router in router constant
    const router = useRouter();
    // console.log(router);
    // for going forward (1) or backward (-1)
    // router.go(1);

    const handleKeyDown = () => {
      // we want to put unique elements inside the array
      if (!tags.value.includes(tag.value)) {
        // \s: means any spaces (spaces will be replaced by the empty string)
        tag.value = tag.value.replace(/\s/, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };
    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };

      await fetch("http://localhost:3000/posts", {
        method: "POST",
        // The type of data we are sending: we are sending
        // json data here
        headers: { "Content-Type": "application/json" },
        // The actual data that we are sending here
        body: JSON.stringify(post),
      });
      router.push({ name: "Home" });
    };
    return { title, body, tag, handleKeyDown, tags, handleSubmit };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>