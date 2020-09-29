<template>
  <div class="main">
    <login-page></login-page>
  </div>
</template>

<script>
import LoginPage from "../components/LoginPage.vue";

export default {
  name: "Home",
  components: {
    LoginPage
  }
};
</script>
