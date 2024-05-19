<template>
  <AppLayout>
    <div class="home-view">
      <AppHeader />
      <div class="image-container">
        <img
          src="@/assets/preview.png"
          alt="Vista previa de la aplicación"
          class="preview-image"
        />
      </div>
      <div class="buttons-container">
        <router-link to="/login" class="button">Inicio de sesión</router-link>
        <router-link to="/register" class="button">Registrarse</router-link>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppLayout from "@/layouts/AppLayout.vue";

export default {
  name: "HomeView",
  components: {
    AppHeader,
    AppLayout,
  },
};
</script>

<style scoped>
.home-view {
  text-align: center;
  margin-top: 50px;
}

.image-container {
  margin: 20px 0;
}

.image-container img {
  max-width: 100%;
  height: auto;
}

.preview-image {
  width: 50%;
  border-radius: 15px;
  border: 5px solid var(--color4); /* Cambiar el borde a color4 */
}

.buttons-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.button {
  border-radius: 20px;
  font-family: var(--font-comfortaa);
  background-color: var(--color1); /* Cambiar el color de fondo del botón a color1 */
  color: var(--color7); /* Cambiar el color de texto del botón a color7 */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.button:active {
  background-color: var(--color4); /* Cambiar el color de fondo del botón activo a color4 */
}
</style>
