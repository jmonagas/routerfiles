import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      userSelection: {},
      computerSelection: {},
      wins: 0,
      ties: 0,
      loses: 0,
   },
   mutations: {
      updateUser: function (state, user) {
         state.userSelection = user;
      },
      updatecomputer: function (state, comp) {
         state.computerSelection = comp;
      },
      updateResults: function (state, result) {
         if (result == 1) {
            state.wins++
         }
         else if (result == 0) {
            state.ties++;
         }
         else if (result == -1) {
            state.loses++;
         }
      }
   },
});