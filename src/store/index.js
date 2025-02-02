/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    login: false,
    infoUser: {},
    infoRole: {},
    infoMateria: {},
    asistencia: {},
    estudiante: {}
  },
  getters: {
    getInfoUser: (state) => {
      return state.infoUser;
    },
    getInfoRole: (state) => {
      return state.infoRole;
    },
    getInfoMateria: (state) => {
      return state.infoMateria;
    },
    getAsistencia: (state) => {
      return state.asistencia;
    },
    getEstudiante: (state) => {
      return state.estudiante;
    }
  },
  mutations: {
    LOGIN_USER: (state, isLogged) => {
      state.login = isLogged;
    },
    SET_INFO_USER: (state, data) => {
      state.infoUser = data;
    },
    SET_DATA_ROL: (state, data) => {
      state.infoRole = data;
    },
    SET_DATA_MATERIA: (state, data) => {
      state.infoMateria = data;
    },
    SET_DATA_ASISTENCIA: (state, data) => {
      state.asistencia = data;
    },
    
  },
  actions: {
    loadInfoUser({ commit }, data) {
      commit("SET_INFO_USER", data);
    },
    loadRoleID({ commit }, data) {
      commit("SET_DATA_ROL", data);
    },
    listarEstudianteMateria({ commit }, data) {
      commit("SET_DATA_MATERIA", data);
    },

    loadDataAsistencia({ commit }, data) {
      commit("SET_DATA_ASISTENCIA", data);
    },

    loginUser: ({ commit }, isLogged) => {
      commit('LOGIN_USER', isLogged)
    },
        
  },
  modules: {},
});
