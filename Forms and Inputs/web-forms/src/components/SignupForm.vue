<template>
  <form>
    <label>Email</label>
    <!-- v-model: this directive is used to sync this input
    with the data property email in script of this component -->
    <input type="email" required v-model="email" />

    <label>Password:</label>
    <input type="password" required v-model="password" />

    <label>Role: </label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills: </label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <!-- key here so vue can keep track of different elements 
    in this list -->
    <div v-for="skill in skills" :key="skill" class="pill">
      {{ skill }}
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept Terms and Conditions</label>
    </div>

    <!-- Connecting checkboxes and putting their values inside
    of an array with the help of an array -->
    <!-- <div>
      <input type="checkbox" value="shaun" v-model="names" />
      <label>Shaun</label>
    </div>
    <div>
      <input type="checkbox" value="youshi" v-model="names" />
      <label>Youshi</label>
    </div>
    <div>
      <input type="checkbox" value="mario" v-model="names" />
      <label>Mario</label>
    </div> -->
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms Accepted: {{ terms }}</p>
  <!-- <p>Which one: {{ names }}</p> -->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      //   giving initial value to the role select when page reloads
      role: "developer",
      terms: "false",
      //   names: [],
      tempSkill: "",
      skills: [],
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        this.skills.push(this.tempSkill);
        this.tempSkill = "";
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 3px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>

<!-- Two way data binding: it means as user enter input data in the
    input field, the data inside script also gets updated which 
    means they are sync -- (One-way-binding).
    However, if we change the data inside the script then
    data also gets uppdated in the input field --(2nd-way-binding)-->