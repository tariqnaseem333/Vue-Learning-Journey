<template>
  <div class="backdrop" @click.self="closeModal">
    <!-- .self is event modifier only fire event for 
          backdrop not for the the child elements clicked-->
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!-- here we are passing h1 and p template from app component -->
      <!-- <slot> Backup content (if not content in app ) </slot> -->
      <!-- Named slots useful when you have a certain structure -->
      <!-- <slot name="links"> </slot> -->
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<!-- Telling Vue this component should accept certain prop 
     and now you can access this header just like we access 
     properties of data function-->
<script>
export default {
  props: ["header", "text", "theme"],
  methods: {
    closeModal() {
      // event is firing in modal component and we want
      // to listen it in app component.
      // here we are emmitting the event from modal component
      // close: giving a name to event we are emmitting
      this.$emit("close");
    },
  },
};
</script>


<!-- These scoped styles will be applied to this component only
     vue will apply a class to all these all elements so they are scoped-->
<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
.modal actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
.modal.sale .actions {
  color: white;
}
.modal.sale .action a {
  color: white;
}
</style>