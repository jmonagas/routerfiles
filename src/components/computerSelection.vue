<template>
  <div v-if="selection.name != undefined">
    <h3>Computer's Choice</h3>
    <img :src="selection.image" alt="Computer's Choice" />
  </div>
</template>

<script>
export default {
  name: "computer-selection",
  computed: {
    selection() {
      return this.$store.state.computerSelection;
    }
  }
};
</script>

<style scoped>
</style>