<template>
  <div class="admin-welcome">
    <h2>Bienvenido al panel de administración</h2>
    <!-- Contenido de bienvenida para administradores -->
  </div>
</template>

<script>
export default {
  name: 'AdminWelcome'
};
</script>

<style scoped>
.admin-welcome {
  padding: 20px;
  background-color: var(--color2); /* Utilizando color2 como color de fondo para el componente */
  color: var(--color7); /* Utilizando color7 como color de texto para el componente */
  border-radius: 10px; /* Agregando borde redondeado al componente */
}

.admin-welcome h2 {
  font-size: 24px; /* Tamaño de fuente para el título */
  margin-bottom: 10px; /* Margen inferior para separar el título del contenido */
}
</style>
