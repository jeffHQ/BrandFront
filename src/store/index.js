// En tu store
import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: false,
    name: '',
    picture: '',
  },
  mutations: {
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    setName(state, name) {
      state.name = name;
    },
    setPicture(state, picture) {
      state.picture = picture;
    },
  },
  actions: {
    login({ commit }, { name, picture }) {
      commit('setLoggedIn', true);
      commit('setName', name);
      commit('setPicture', picture);
    },
    logout({ commit }) {
      commit('setLoggedIn', false);
      commit('setName', '');
      commit('setPicture', '');
    },
  },
});
