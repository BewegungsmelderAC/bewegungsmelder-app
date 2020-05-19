import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const httpModule = require("tns-core-modules/http");

export default new Vuex.Store({
  state: {
    events: [],
  },
  getters: {
    getEvents: state => state.events || []
  },
  mutations: {
    saveEvents(state, events = []) {
      events.forEach(event => state.events.push(event));
    },
    clearEvents(state) {
      state.events = [];
    }
  },
  actions: {
    fetchEvents({ commit }, url) {
      httpModule.getJSON(url).
      then((r) => {
        commit('saveEvents', r);
      }, (e) => {
        trace.error("Http Request failed");
      });
    },
    clearEvents({ commit }) {
      commit('clearEvents');
    }
  }
});
