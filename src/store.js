//src\store.js
import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      id: -1,
      name: "",
      lastName: "",
      generalRole: "",
      role: "",
      idOrganization: -1,
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    updateUser({ commit }, user) {
      commit("setUser", user);
    },
  },
  getters: {
    user: (state) => state.user,
    generalRole: (state) => state.user?.generalRole || "",
    role: (state) => state.user?.role || "",
  },
});
