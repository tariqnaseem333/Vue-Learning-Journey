<template>
  <div>
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    <Results v-if="showResult" :score="score" />
  </div>
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";

export default {
  name: "App",
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false,
    };
  },
  methods: {
    // when button is clicked user is playing and there is a
    //  delay in appearing the message
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResult = false;
      console.log(this.delay);
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = !this.isPlaying;
      this.showResult = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>

<!--  In vue lifecycle hooks, first components are created, then 
      mounted to the DOM, then updated and when they are no longer
      needed in the screen then destroyed-->