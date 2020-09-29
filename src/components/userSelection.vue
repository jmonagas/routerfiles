<template>
  <div class="main" v-if="selection.name != undefined">
    <h3>User's Choice</h3>
    <img :src="selection.image" alt="User's Choice" />
  </div>
</template>

<script>
export default {
  name: "user-selection",
  computed: {
    selection() {
      return this.$store.state.userSelection;
    }
  }
};
</script>

<style scoped>
img {
  height: 10vh;
}
</style>