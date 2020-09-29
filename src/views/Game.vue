<template>
  <div class="main">
    <the-game></the-game>
    <div id="choices">
      <button @click="select(0)">Rock</button>
      <button @click="select(1)">Paper</button>
      <button @click="select(2)">Scissors</button>
    </div>
    <scoreBoard />
    <userSelection />
    <computerSelection />
  </div>
</template>

<script>
import TheGame from "@/components/TheGame.vue";
import scoreBoard from "@/components/scoreBoard";
import userSelection from "@/components/userSelection";
import computerSelection from "@/components/computerSelection";

export default {
  name: "Game",
  components: {
    TheGame,
    scoreBoard,
    userSelection,
    computerSelection
  },
  data: function() {
    return {
      game_elements: [
        {
          name: "Rock",
          image:
            "https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png"
        },
        {
          name: "Paper",
          image:
            "https://www.clipartkey.com/mpngs/m/109-1094319_rock-paper-scissors-png.png"
        },
        {
          name: "Scissors",
          image:
            "https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png"
        }
      ],
      rules: {
        Rock: {
          Rock: 0,
          Paper: -1,
          Scissors: 1
        },
        Paper: {
          Rock: -1,
          Paper: 0,
          Scissors: 1
        },
        Scissors: {
          Rock: -1,
          Paper: 1,
          Scissors: 0
        }
      }
    };
  },
  methods: {
    select: function(index) {
      let userSelection = this.game_elements[index];
      let computerSelection = this.game_elements[Math.floor(Math.random() * 3)];
      let result = this.rules[userSelection.name][computerSelection.name];
      this.$store.commit("updateUser", userSelection);
      this.$store.commit("updatecomputer", computerSelection);
      this.$store.commit("updateResults", result);
    }
  }
};
</script>
