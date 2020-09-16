import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const httpModule = require("tns-core-modules/http");

export default new Vuex.Store({
  state: {
    events: [],
    colorScheme: ["#FFFFFF","#FFEBF4","#FF0075","#EAF4DE","#B8B8F3","#033F6D","#A9FBC3","#FFF851","#6A00F5"],
  },
  getters: {
    getEvents: state => state.events || [],
    getColors: state => state.colorScheme,
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
