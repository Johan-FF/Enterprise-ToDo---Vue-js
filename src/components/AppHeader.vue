<template>
  <div class="app-header">
    <section>
      <img
        src="@/assets/logoOrgComp.png"
        alt="Logo OrgComp"
        class="logo-image"
      />
      <AppTitle />
    </section>
    <section>
      <button @click="navigate(`register`)">Sobre nosotros</button>
      <button @click="navigate(`login`)">Servicios</button>
      <button @click="navigate(`login`)">Inicio de sesión</button>
    </section>
  </div>
</template>

<script>
import "@/assets/styles.css";
import AppTitle from "@/components/AppTitle.vue";

export default {
  name: "AppHeader",
  components: { AppTitle },
  methods: {
    navigate(page) {
      this.$router.push({ name: page });
    },
  },
};
</script>

<style scoped>
.app-header {
  background-color: var(--header-background-color);
  font-family: var(--font-family);
  padding-inline: 5px;
  text-align: center;
  font-size: var(--subtitle-font-size);
  display: grid;
  grid-template-columns: 30% 70%;
}

.app-header section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  height: 50px;
}

button {
  border-radius: 16px;
  font-family: var(--font-comfortaa);
  background-color: var(--color1);
  color: var(--color7);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  margin-inline: 5%;
}
</style>
