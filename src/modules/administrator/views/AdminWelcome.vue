<template>
  <AdminLayout>
    <div class="admin-welcome">
      <h2>
        Esta es una prueba de contenido de admin-welcome <br />
        Aquí cambia el contenido según si selecciona proyectos o calendario
        <br />
        La estructura de las demás views de administrador en teoría deberían
        tener la misma estructura de admin-welcome
      </h2>
      <!-- Contenido de bienvenida para administradores -->
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";

export default {
  name: "AdminWelcome",
  components: {
    AdminLayout,
  },
};
</script>

<style scoped>
.admin-welcome {
  padding: 20px;
  background-color: var(
    --color2
  ); /* Utilizando color2 como color de fondo para el componente */
  color: var(
    --color7
  ); /* Utilizando color7 como color de texto para el componente */
  border-radius: 10px; /* Agregando borde redondeado al componente */
}

.admin-welcome h2 {
  font-size: 24px; /* Tamaño de fuente para el título */
  margin-bottom: 10px; /* Margen inferior para separar el título del contenido */
}
</style>
