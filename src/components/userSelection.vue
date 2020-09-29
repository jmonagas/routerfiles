<template>
  <div v-if="selection.name != undefined">
    <h1>User's Choice</h1>
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
</style>