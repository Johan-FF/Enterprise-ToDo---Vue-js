<template>
  <div class="app-header">
    <h1>
      <span :style="orgStyle">Org</span>
      <span :style="compStyle">Comp</span>
    </h1>
  </div>
</template>

<script>
// Importa tu archivo styles.css
import '@/assets/styles.css';

export default {
  name: "AppHeader",
  data() {
    return {
      orgStyle: {
        color: "var(--color7)", // Utilizando la variable de color para el texto de organización
        fontWeight: 1000,
      },
      compStyle: {
        color: "var(--color6)", // Utilizando la variable de color para el texto de compañía
        fontWeight: 1000,
      },
    };
  },
};
</script>

<style scoped>
/* Aquí puedes seguir definiendo estilos específicos para este componente */
.app-header {
  background-color: var(--header-background-color); /* Utilizando la variable de color de fondo del encabezado */
  font-family: var(--font-family); /* Utilizando la variable de fuente Comfortaa */
  padding: 5px;
  text-align: center;
  font-size: var(--subtitle-font-size); /* Utilizando la variable de tamaño de fuente para subtítulos */
  border-radius: var(--button-border-radius); /* Utilizando la variable de radio de borde para botones */
  height: min-content;
}
</style>
