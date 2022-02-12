<template>
  <div>
    <!-- this .prevent event modifier will prevet the default action of 
          form submission refresh behaviour -->
    <form @submit.prevent="handleSubmit">
      <label>Email</label>
      <!-- v-model: this directive is used to sync this input
    with the data property email in script of this component -->
      <input type="email" required v-model="email" />

      <label>Password:</label>
      <input type="password" required v-model="password" />
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <label>Role: </label>
      <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>

      <label>Skills: </label>
      <!-- if you press alt + , then the value ',' won't stored in array  -->
      <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
      <!-- key here so vue can keep track of different elements 
      in this list and key must be unique-->
      <div v-for="skill in skills" :key="skill" class="pill">
        <p @click="deleteSkill(skill)">{{ skill }}</p>
      </div>

      <div class="terms">
        <input type="checkbox" v-model="terms" required />
        <label>Accept Terms and Conditions</label>
      </div>

      <div class="submit">
        <button>Create an Account</button>
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
  </div>
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
      names: [],
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    handleSubmit() {
      // validate password
      this.passwordError =
        this.password.length > 5 ? "" : "Password must be atleast 6 chars long";
      if (!this.passwordError) {
        console.log("email:", this.email);
        console.log("password:", this.password);
        console.log("role:", this.role);
        console.log("skills:", this.skills);
        console.log("terms accepted", this.terms);
      }
      console.log("form submitted");
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
  font-size: 0.8em;
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
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>

<!-- Two way data binding: it means as user enter input data in the
    input field, the data inside script also gets updated which 
    means they are sync -- (One-way-binding).
    However, if we change the data inside the script then
    data also gets uppdated in the input field --(2nd-way-binding)-->