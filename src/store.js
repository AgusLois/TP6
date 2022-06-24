import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    squares: [],
    pickedColor: "",
    message: "",
    button: "",
  },
  actions: {
    setMessage({ commit }, message) {
      commit("changeMessage", message);
    },
    setColors({ commit }, colors) {
      commit("changeSquares", colors);
    },
    setColor({ commit }, color) {
      commit("changeColor", color);
    },
    setButton({ commit }, label) {
      commit("changeButton", label);
    },
  },
  mutations: {
    changeMessage(state, message) {
      state.message = message;
    },
    changeSquares(state, colors) {
      state.squares = colors;
    },
    changeColor(state, color) {
        state.pickedColor = color;
    },
    changeButton(state, label) {
      state.button = label;
    },
  },
});