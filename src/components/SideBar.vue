<template>
  <div class="sidebar">
    <template v-if="user">
      <button
        @click="navigate(`${user.generalRole}-welcome`)"
        class="sidebar-button"
      >
        Home
      </button>
      <template v-if="user.generalRole === 'admin'">
        <button @click="navigate('admin-roles')" class="sidebar-button">
          Roles
        </button>
        <button @click="navigate('admin-employees')" class="sidebar-button">
          Usuarios
        </button>
      </template>
      <template
        v-else-if="
          user.generalRole === 'coordinator' || user.generalRole === 'employee'
        "
      >
        <button @click="toggleNotifications" class="sidebar-button">
          Notificaciones
        </button>
        <div v-if="showNotifications" class="notifications">
          <!-- Aquí puedes listar las notificaciones -->
          <p>Notificación 1</p>
          <p>Notificación 2</p>
        </div>
        <button
          @click="navigate(`${user.generalRole}-projects`)"
          class="sidebar-button"
        >
          Proyectos
        </button>
        <button
          @click="navigate(`${user.generalRole}-calendar`)"
          class="sidebar-button"
        >
          Calendario
        </button>
        <button
          @click="navigateToCalendar"
          class="sidebar-button"
        >
          Calendario
        </button>
        <!-- Fin del nuevo botón -->
        <button
          @click="navigate(`${user.generalRole}-tasks`)"
          class="sidebar-button"
        >
          Tareas
        </button>
      </template>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SideBar",
  computed: {
    ...mapState({
      user: "user",
    }),
  },
  data() {
    return {
      showNotifications: false,
    };
  },
  methods: {
    navigate(page) {
      // Aquí puedes implementar la lógica para la navegación
      this.$router.push({ name: page });
    },
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    },
    navigateToCalendar() {
      // Aquí puedes implementar la acción específica para el botón "Calendario"
      this.$router.push({ name: `${this.user.generalRole}-calendar` });
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 100%;
  background-color: var(--skin-color); /* Utilizando la variable de color1 */
  padding: 10px;
}

.sidebar-button {
  display: block;
  margin-bottom: 10px;
  width: 80%;
  padding: 10px;
  text-align: left;
  background-color: var(
    --button-background-color
  ); /* Utilizando la variable de color de fondo para botones */
  color: var(
    --button-color
  ); /* Utilizando la variable de color de texto para botones */
  border: 1px solid var(--input-border-color); /* Utilizando la variable de color de borde para inputs */
  cursor: pointer;
}

.notifications {
  background-color: var(
    --input-background-color
  ); /* Utilizando la variable de color de fondo para inputs */
  border: 1px solid var(--input-border-color); /* Utilizando la variable de color de borde para inputs */
  padding: 10px;
  margin-top: 5px;
}
</style>
