<template>
    <div class="sidebar">
      <template v-if="user">
        <template v-if="user.generalRole === 'admin'">
          <button @click="navigate('roles')" class="sidebar-button">Roles</button>
          <button @click="navigate('users')" class="sidebar-button">Usuarios</button>
        </template>
        <template v-else-if="user.generalRole === 'coordinator' || user.generalRole === 'employee'">
          <button @click="navigate('home')" class="sidebar-button">Home</button>
          <button @click="toggleNotifications" class="sidebar-button">Notificaciones</button>
          <div v-if="showNotifications" class="notifications">
            <!-- Aquí puedes listar las notificaciones -->
            <p>Notificación 1</p>
            <p>Notificación 2</p>
          </div>
          <button @click="navigate('projects')" class="sidebar-button">Proyectos</button>
          <button @click="navigate('calendar')" class="sidebar-button">Calendario</button>
        </template>
        <template v-else>
          <!-- Opciones por defecto -->
        </template>
      </template>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  export default {
    name: 'SideBar',
    computed: {
      ...mapState({
        user: 'user'
      })
    },
    data() {
      return {
        showNotifications: false
      };
    },
    methods: {
      navigate(page) {
        // Aquí puedes implementar la lógica para la navegación
        this.$emit('navigate', page);
      },
      toggleNotifications() {
        this.showNotifications = !this.showNotifications;
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    background-color: var(--color1); /* Utilizando la variable de color1 */
    padding: 10px;
  }
  
  .sidebar-button {
    display: block;
    margin-bottom: 10px;
    width: 100%;
    padding: 10px;
    text-align: left;
    background-color: var(--button-background-color); /* Utilizando la variable de color de fondo para botones */
    color: var(--button-color); /* Utilizando la variable de color de texto para botones */
    border: 1px solid var(--input-border-color); /* Utilizando la variable de color de borde para inputs */
    cursor: pointer;
  }
  
  .notifications {
    background-color: var(--input-background-color); /* Utilizando la variable de color de fondo para inputs */
    border: 1px solid var(--input-border-color); /* Utilizando la variable de color de borde para inputs */
    padding: 10px;
    margin-top: 5px;
  }
  </style>
  