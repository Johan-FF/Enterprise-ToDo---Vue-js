import { createStore } from 'vuex';

export default createStore({
  state: {
    // Datos de prueba para simular el estado del usuario
    user: {
      name: 'Usuario de Prueba',
      generalRole: 'employee', // Rol general del usuario (admin, coordinador, empleado)
      specificRole: 'contador' // Rol específico dentro de la organización
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    updateUser({ commit }, user) {
      commit('setUser', user);
    }
  },
  getters: {
    user: state => state.user,
    generalRole: state => state.user?.generalRole || '', // Uso del operador optional chaining (?.)
    specificRole: state => state.user?.specificRole || '' // Uso del operador optional chaining (?.)
  }
});