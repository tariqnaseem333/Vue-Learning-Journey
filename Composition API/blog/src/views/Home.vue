<template>
  <div class="home">
    <!-- Computed Values -->
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in searchNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">stop watch</button>
    <!-- Refs vs Reactive -->
    <!-- <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ frame.name }} - {{ frame.age }}</p>
    <button @click="updateFrame">Update Frame</button>
    <h2>Reactive</h2>
    <p>{{ frame2.name }} - {{ frame2.age }} - {{ name2 }}</p>
    <button @click="updateFrame2">Update Frame2</button> -->

    <!-- Home -->
    <!-- <p ref="p">Name is: {{ name }} and age is: {{ age }}</p> -->
    <!-- <p ref="p">Name is: {{ name }} and age is: {{ age }}</p>
    <button @click="handleClick">Click Me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name" /> -->
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "@vue/runtime-core";
// import { ref, reactive } from "@vue/reactivity";
export default {
  name: "Home",
  // this setup function will always run first before
  // created mounted and this keyword is not available
  // inside the setup() this.$refs.name
  setup() {
    // Computed Properties
    // const name = computed(() => {
    //   return "shaun";
    // });

    const search = ref("");
    const names = ref([
      "mario",
      "youshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);

    // it will run for every key you press
    // cnst stopWatch = watch(search, () => {
    //   console.log("watch function run");
    // });

    // it will run only once initially not after that because it
    // doesn't know what we are watching it will atleast run once
    // unlike watch which will run only when there is a change in value
    const stopEffect = watchEffect(() => {
      console.log("watchEffect function runs", search.value);
    });

    const searchNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      // stopWatch();
      stopEffect();
    };

    return { names, search, searchNames, handleClick };

    // watch and watchEffect: run these functions when there is a change in value

    // Refs vs Reactive
    // in ref we need value property to access but in reactive
    // we can direct get reactive property
    // we cannot use primitive values inside reactive because we
    // cannot update it
    // const frame = ref({ name: "mario", age: 30 });
    // const frame2 = reactive({ name: "luigi", age: 35 });
    // const name1 = ref("mario");
    // const name2 = reactive("luigi");
    // const updateFrame = () => {
    //   frame.value.age = 40;
    // };
    // const updateFrame2 = () => {
    //   frame2.age = 45;
    //   name2 = "mario";
    // };
    // return { frame, updateFrame, frame2, updateFrame2, name2 };

    // console.log(this);
    // const p = ref(null);
    // console.log(p, p.value);
    // variables
    // these values are not reactive
    // making these variables reactive by using ref
    // name.value if want to access in setup function but
    // in template only name no need of name.value
    // const name = ref("mario");
    // const age = ref(30);
    // functions
    // const handleClick = () => {
    //   name.value = "luigi";
    //   age.value = 35;
    // p will only give you the ref object p.value will give p tag
    // console.log(p, p.value);
    // p.value.classList.add("test");
    // p.value.textContent = "hello world";
    // };
    // whatever value inside the return will be available inside
    // template too
    // return { name, age, handleClick };
  },

  // data() {
  //   // these values are reactive meaning if change here, then
  //   // change in template also
  //   return {
  //     age: 40,
  //   };
  // }
};
</script>
