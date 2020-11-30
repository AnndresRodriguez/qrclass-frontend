import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    infoUser: {},
    infoRole: {}
  },
  getters: {
    getInfoUser: state => {
      return state.infoUser;
    },
    getInfoRole: state => {
      return state.infoRole;
    }
  },
  mutations: {
    SET_INFO_USER: (state, data) => {
      state.infoUser = data;
    },
    SET_DATA_ROL: (state, data) => {
      state.infoRole = data;
    }
  },
  actions: {
    loadInfoUser({ commit }, data) {
      commit("SET_INFO_USER", data);
    },
    loadRoleID({ commit }, data) {
      commit("SET_DATA_ROL", data);
    }
  },
  modules: {}
});
