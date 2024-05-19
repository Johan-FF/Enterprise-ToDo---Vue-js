<template>
  <div>
    <h1 class="title">Inicio de sesión</h1>
    <form @submit.prevent="login" class="form-vertical">
      <input
        v-model="username"
        placeholder="Nombre de usuario"
        class="input-style"
      />
      <input
        type="password"
        v-model="password"
        placeholder="Contraseña"
        class="input-style"
      />
      <button type="submit" class="button-style default-button">
        Iniciar sesión
      </button>
    </form>
  </div>
</template>

<script>
export default {
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
.form-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.input-style {
  margin-bottom: 10px;
  padding: 8px; /* Ajustar el padding de los inputs */
  border: 1px solid var(--input-border-color); /* Utilizar el color de borde de los inputs */
  border-radius: var(
    --input-border-radius
  ); /* Utilizar el radio de borde de los inputs */
}

.default-button {
  background-color: var(--button-background-color);
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
