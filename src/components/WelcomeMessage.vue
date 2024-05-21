<template>
    <div class="welcome-message">
      <h2 class="welcome-title">{{ welcomeMessage }}</h2>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'WelcomeMessage',
    computed: {
      ...mapGetters(['generalRole']),
      welcomeMessage() {
        switch (this.generalRole) {
          case 'admin':
            return 'Bienvenido al panel de administración'
          case 'coordinator':
            return 'Bienvenido al panel de coordinación de proyectos'
          case 'employee':
            return 'Bienvenido al panel de empleados'
          default:
            return 'Bienvenido'
        }
      }
    }
  }
  </script>
  
  <style scoped>
  @import '@/assets/styles.css';
  
  .welcome-message {
    text-align: center;
    padding: 20px;
    width: 100%;
  }
  
  .welcome-title {
    font-family: var(--font-family);
    font-size: var(--titulo-aplicacion-font-size);
    font-weight: var(--titulo-aplicacion-font-weight);
    color: var(--titulo-aplicacion-color);
    margin-bottom: 20px;
    width: 100%;
  }
  </style>