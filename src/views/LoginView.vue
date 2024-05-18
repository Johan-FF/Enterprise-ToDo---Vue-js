<template>
  <AppLayout>
    <div class="login-view">
      <AppHeader />
      <h1>Inicio de sesión</h1>
      <form @submit.prevent="submitForm" class="login-form">
        <div class="form-group">
          <label for="username">Usuario</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <p class="forgot-password">
        <a @click="forgotPassword">¿Olvidaste tu contraseña?</a>
      </p>
    </div>
  </AppLayout>
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
    submitForm() {
      if (this.username && this.password) {
        // Aquí puedes manejar el envío del formulario
        console.log("Formulario enviado", {
          username: this.username,
          password: this.password,
        });
      }
    },
    forgotPassword() {
      this.$router.push({ name: "forgot-password" });
    },
  },
};
</script>

<style scoped>
.login-view {
  text-align: center;
  margin-top: 50px;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-group {
  margin-bottom: 15px;
  width: 100%;
  max-width: 300px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  border-radius: 5px;
  font-family: var(--font-comfortaa);
  border: 1px solid var(--light-pink-color);
  width: 300px;
  height: 25px;
  background-color: var(--light-yellow-color);
}

button {
  border-radius: 20px;
  font-family: var(--font-comfortaa);
  background-color: var(--yellow-color);
  color: var(--dark-blue-color);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:active {
  background-color: var(--pink-color);
}

.forgot-password {
  margin-top: 10px;
}
.forgot-password a {
  color: var(--green-color);
  cursor: pointer;
}
</style>
