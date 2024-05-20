<template>
  <div id="login-view">
    <AppHeader />
    <AppLayout>
      <div id="form-container">
        <h1 class="title">Inicio de sesión</h1>
        <form @submit.prevent="login" class="form-vertical">
          <div class="form-group">
            <label for="username">Correo electrónico:</label>
            <input
              v-model="username"
              placeholder="Nombre de usuario"
              class="input-style"
            />
            <label for="username">Contraseña:</label>
            <input
              type="password"
              v-model="password"
              placeholder="Contraseña"
              class="input-style"
            />
          </div>
          <button type="submit" class="button-style default-button">
            Iniciar sesión
          </button>
        </form>
      </div>
    </AppLayout>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppLayout from "@/layouts/AppLayout.vue";

export default {
  name: "LoginView",
  components: {
    AppHeader,
    AppLayout,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const user = {
        name: this.username,
        password: this.password,
      };
      // Aquí podrías enviar el usuario y contraseña al servidor para autenticación
      // y luego manejar la respuesta según corresponda
      // Ejemplo de manejo de respuesta simulado:
      if (this.username === "usuario" && this.password === "contraseña") {
        this.$store.dispatch("updateUser", user);
        this.$router.push({ name: "admin-welcome" });
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    },
  },
};
</script>

<style scoped>
#login-view {
  background-color: var(--color2);
  height: 90vh;
  padding-bottom: 5%;
}

#form-container {
  width: 60%;
  padding-block: 5%;
  border-radius: 32px;
  margin: 5% auto 0 auto;
  background-color: var(--color1);
}

.title {
  margin-bottom: 20px;
}

.form-group {
  width: 100%;
}

.form-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-style {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--input-border-radius);
  width: 80%;
}

.default-button {
  background-color: var(--color3);
  color: var(--button-color);
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  border: none;
  cursor: pointer;
}

.default-button:active {
  background-color: var(--button-active-background-color);
}
</style>
