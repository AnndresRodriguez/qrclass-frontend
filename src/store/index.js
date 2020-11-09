import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoUser: {}
  },
  getters: {
    getInfoUser: state => {
      return state.infoUser;
    }
  },
  mutations: {
    SET_INFO_USER: (state, data) => {
      state.infoUser = data;
    }
  },
  actions: {
    loadInfoUser({ commit }, data) {
      commit("SET_INFO_USER", data);
    }
  },
  modules: {}
});
