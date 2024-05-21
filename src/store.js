//src\store.js
import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      name: "Usuario de Prueba",
      generalRole: "coordinator", // Rol general del usuario (admin, coordinador, empleado)
      specificRole: "contador", // Rol específico dentro de la organización
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
    specificRole: (state) => state.user?.specificRole || "",
  },
});
