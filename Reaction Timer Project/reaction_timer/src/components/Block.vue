<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  //  It will be fired only when this component will be
  //  mounted to the dom
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      // emitting the event when timer is stopped to the app
      //  component and sending reaction time with it
      this.$emit("end", this.reactionTime);
    },
  },
  // It will be fired only when any data inside this
  //  component is updated
  //   updated() {
  //     console.log("component updated");
  //   },
  // It will be fired only when any this
  //  component is unmounted from the dom
  //   unmounted() {
  //     console.log("unmounted");
  //   },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>