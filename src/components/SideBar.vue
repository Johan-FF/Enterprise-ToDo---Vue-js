<template>
  <div class="sidebar">
    <section>
      <img
        src="@/assets/logoOrgComp.png"
        alt="Logo OrgComp"
        class="logo-image"
      />
      <AppTitle />
    </section>
    <section>
      <button
        @click="navigate(`${user.generalRole}-welcome`)"
        class="sidebar-button"
      >
        Inicio
      </button>
      <template v-if="user">
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
            user.generalRole === 'coordinator' ||
            user.generalRole === 'employee'
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
            @click="navigate(`${user.generalRole}-tasks`)"
            class="sidebar-button"
          >
            Tareas
          </button>
        </template>
      </template>
    </section>
    <section>
      <a href="https://github.com/Johan-FF/Enterprise-ToDo---Vue-js">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2rem"
          viewBox="0 0 496 512"
        >
          <path
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          />
        </svg>
      </a>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

import AppTitle from "@/components/AppTitle.vue";

export default {
  name: "SideBar",
  components: { AppTitle },
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
  },
};
</script>

<style scoped>
.sidebar {
  background-color: var(--skin-color);
  padding: 10px;
  display: grid;
  grid-template-rows: 30% 60% 10%;
}

.sidebar section:nth-child(1) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color5);
  font-size: var(--subtitle-font-size);
}

.logo-image {
  height: 50%;
}

.sidebar section:nth-child(2) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sidebar-button {
  margin-bottom: 10px;
  width: 80%;
  padding: 10px;
  text-align: center;
  border-radius: 16px;
  background-color: var(--button-background-color);
  color: var(--button-color);
  border: 1px solid var(--input-border-color);
  cursor: pointer;
}

.notifications {
  background-color: var(--input-background-color);
  border: 1px solid var(--input-border-color);
  padding: 10px;
  margin-top: 5px;
}
</style>
