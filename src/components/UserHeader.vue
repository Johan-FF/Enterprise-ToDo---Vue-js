<template>
  <header class="user-header">
    <h1>Bienvenido, {{ name }}</h1>
    <p>Rol general: {{ generalRole }}</p>
    <p>Rol específico: {{ specificRole }}</p>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UserHeader",
  computed: {
    ...mapState({
      name: (state) => state.user?.name || "", // Uso del operador optional chaining (?.)
      generalRole: (state) => state.user?.generalRole || "", // Uso del operador optional chaining (?.)
      specificRole: (state) => state.user?.specificRole || "", // Uso del operador optional chaining (?.)
    }),
  },
};
</script>

<style scoped>
.user-header {
  background-color: var(--color5); /* Morado claro */
  padding: 1rem;
  text-align: center;
  width: 100%;
  color: var(--color6); /* Blanco */
  border: 3px solid var(--color7);
}
</style>
