import Vue from 'vue';
import Vuex from 'vuex';
import { traceCategories } from 'tns-core-modules/ui/frame/frame';

const httpModule = require("tns-core-modules/http");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
  },
  getters: {
    getEvents: state => state.events || []
  },
  mutations: {
    saveEvents(state, events = []) {
      state.events = [...events];
    },
  },
  actions: {
    fetchEvents({ commit, state }) {
      httpModule.getJSON("https://bm-ac.ml/api/event").
      then((r) => {
        console.log("fetched data, saving to store now")
        console.log(r);
        commit('saveEvents', r);
      }, (e) => {
        trace.error("Http Request failed");
      });
    }
  }
});
