import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const httpModule = require("tns-core-modules/http");

export default new Vuex.Store({
  state: {
    events: [],
    colorScheme: {
      color01: "#FFFFFF",
      color02: "#FFEBF4",
      color03: "#FF0075",
      color04: "#EAF4DE",
      color05: "#B8B8F3",
      color06: "#033F6D",
      color07: "#A9FBC3",
      color08: "#FFF851",
      color09: "#6A00F5",
    }
  },
  getters: {
    getEvents: state => state.events || []
  },
  mutations: {
    saveEvents(state, events = []) {
      state.events = [...state.events, ...events]
    },
    clearEvents(state) {
      state.events = [];
    }
  },
  actions: {
    async fetchEvents({ commit, dispatch }, url) {
      try {
        commit('saveEvents', await httpModule.getJSON(url))
      } catch(e) {}
    },
    clearEvents({ commit }) {
      commit('clearEvents');
    }
  }
});
