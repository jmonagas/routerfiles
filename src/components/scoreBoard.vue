<template>
  <div class="main">
    <h3>{{ "WINS: " + wins }}</h3>
    <h3>{{ "TIES: " + ties }}</h3>
    <h3>{{ "LOSES: " + loses }}</h3>
  </div>
</template>

<script>
export default {
  name: "score-board",
  computed: {
    wins() {
      return this.$store.state.wins;
    },
    loses() {
      return this.$store.state.loses;
    },
    ties() {
      return this.$store.state.draws;
    }
  }
};
</script>

<style scoped>
</style>