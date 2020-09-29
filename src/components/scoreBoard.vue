<template>
  <div>
    <h2>{{ "Score Wins: " + wins }}</h2>
    <h2>{{ "Score Ties: " + ties }}</h2>
    <h2>{{ "Score Loses: " + loses }}</h2>
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
      return this.$store.state.ties;
    }
  }
};
</script>

<style scoped>
</style>