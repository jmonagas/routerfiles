<template>
  <div class="main">
    <h3>Welcome to the Game</h3>
    <br />
    <form action="javascript:void(0)">
      <p>Enter Username</p>
      <input type="text" v-model="username" />
      <br />
      <p>Enter Password</p>
      <input type="password" v-model="password" />
      <br />
      <br />
      <button @click="login">Login</button>
    </form>
  </div>
</template>

<script>
// "username": "eve.holt@reqres.in",
// "password": "cityslicka",
// "token": "QpwL5tke4Pnpja7X4"

import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "LoginPage",
  data: function() {
    return {
      username: "",
      password: "",
      error: false
    };
  },
  methods: {
    login: function() {
      axios
        .request({
          url: "https://reqres.in/api/login",
          method: "POST",
          data: {
            username: this.username,
            password: this.password
          },
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          cookies.set("token", response.data.token);
          this.$router.push("/game");
        })
        .catch(error => {
          console.log(error);
          this.error = true;
        });
    }
  }
};
</script>

<style scoped>
#main {
  line-height: 2;
}
</style>
