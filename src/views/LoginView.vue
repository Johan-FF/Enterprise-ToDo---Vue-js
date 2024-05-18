<template>
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
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "LoginView",
  components: {
    AppHeader,
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
  font-family: "Comfortaa", cursive;
  border: 1px solid #747264;
  width: 300px;
  height: 25px;
  background-color: #fffdcb;
}

button {
  border-radius: 20px;
  font-family: "Comfortaa", cursive;
  background-color: #ffff80;
  color: rgb(52, 52, 52);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:active {
  background-color: #e178c5;
}

.forgot-password {
  margin-top: 10px;
}
.forgot-password a {
  color: #42b983;
  cursor: pointer;
}
</style>
