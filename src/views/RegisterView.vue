<template>
  <div id="register-view">
    <AppHeader />
    <AppLayout>
      <div id="form-container">
        <h1 class="title">Registro</h1>
        <form @submit.prevent="submitForm" class="register-form">
          <h2>Organización</h2>
          <div class="form-group">
            <label for="companyName">Nombre de la compañía</label>
            <input
              type="text"
              id="companyName"
              v-model="companyName"
              required
            />
          </div>
          <div class="form-group">
            <label for="industry">Sector o industria</label>
            <input type="text" id="industry" v-model="industry" required />
          </div>
          <div class="form-group">
            <label for="employeeCount">Número de empleados</label>
            <input
              type="number"
              id="employeeCount"
              v-model="employeeCount"
              required
            />
          </div>
          <div class="form-group">
            <label for="address">Dirección física</label>
            <input type="text" id="address" v-model="address" required />
          </div>
          <div class="form-group">
            <label for="city">Ciudad</label>
            <input type="text" id="city" v-model="city" required />
          </div>
          <div class="form-group">
            <label for="postalCode">Código Postal</label>
            <input type="text" id="postalCode" v-model="postalCode" required />
          </div>
          <div class="form-group">
            <label for="country">País</label>
            <input type="text" id="country" v-model="country" required />
          </div>
          <div class="form-group">
            <label for="companyPhone">Número de contacto de la compañía</label>
            <input
              type="tel"
              id="companyPhone"
              v-model="companyPhone"
              required
            />
          </div>

          <h2>Administrador</h2>
          <div class="form-group">
            <label for="adminName">Nombre</label>
            <input type="text" id="adminName" v-model="adminName" required />
          </div>
          <div class="form-group">
            <label for="adminLastName">Apellido</label>
            <input
              type="text"
              id="adminLastName"
              v-model="adminLastName"
              required
            />
          </div>
          <div class="form-group">
            <label for="adminEmail">Correo electrónico</label>
            <input type="email" id="adminEmail" v-model="adminEmail" required />
          </div>
          <div class="form-group">
            <label for="adminIdentification">Cédula</label>
            <input
              type="number"
              id="adminIdentification"
              v-model="adminIdentification"
              required
            />
          </div>
          <div class="form-group">
            <label for="adminPassword">Contraseña</label>
            <input
              @input="verifyPassword('La contraseña no coincide')"
              type="password"
              id="adminPassword"
              v-model="adminPassword"
              required
            />
          </div>
          <div class="form-group">
            <label for="adminRePassword">Confirmar contraseña</label>
            <input
              @input="verifyPassword('La contraseña no coincide')"
              type="password"
              id="adminRePassword"
              v-model="adminRePassword"
              required
            />
          </div>

          <label id="error-message" style="display: none; color: red"
            >La contraseña no coincide</label
          >
          <button type="submit" class="button-style default-button">
            Registrarse
          </button>
          <label id="success-message" style="display: none; color: green"
            >Organización creada con éxito</label
          >
        </form>
      </div>
    </AppLayout>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import { register } from "@/services/user";

export default {
  name: "RegisterView",
  components: {
    AppHeader,
    AppLayout,
  },
  data() {
    return {
      companyName: "",
      industry: "",
      employeeCount: null,
      address: "",
      city: "",
      postalCode: "",
      country: "",
      companyPhone: "",
      // Admin
      adminName: "",
      adminLastName: "",
      adminEmail: "",
      adminIdentification: "",
      adminPassword: "",
      adminRePassword: "",
    };
  },
  methods: {
    async submitForm() {
      this.verifyPassword("Por favor verifique la contraseña");
      if (this.adminPassword !== this.adminRePassword) return;

      const formData = {
        companyName: this.companyName,
        industry: this.industry,
        employeeCount: this.employeeCount,
        address: this.address,
        city: this.city,
        postalCode: this.postalCode,
        country: this.country,
        companyPhone: this.companyPhone,
        name: this.adminName,
        lastName: this.adminLastName,
        email: this.adminEmail,
        identification: this.adminIdentification.toString(),
        password: this.adminPassword,
      };

      await register(formData).then((data) => {
        if (data.message === "success")
          document.getElementById("success-message").style.display = "block";
      });
    },
    verifyPassword(message) {
      const error = document.getElementById("error-message");
      if (this.adminPassword !== this.adminRePassword) {
        error.style.display = "block";
        error.textContent = message;
      } else {
        error.style.display = "none";
      }
    },
  },
};
</script>

<style scoped>
#register-view {
  background-color: var(--color6);
  height: 100%;
  padding-bottom: 5%;
}

#form-container {
  width: 70%;
  padding-block: 5%;
  border-radius: 32px;
  margin: 5% auto 0 auto;
  background-color: var(--color1);
}

.title {
  margin-bottom: 20px;
}

.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  padding: 10px;
  border-radius: var(--input-border-radius);
  border: 1px solid var(--input-border-color);
  background-color: var(--input-background-color);
  width: 90%;
}

button {
  margin-top: 32px;
  border-radius: var(--button-border-radius);
  font-family: var(--font-comfortaa);
  background-color: var(--color3);
  color: var(--button-color);
  border: none;
  padding: var(--button-padding);
  cursor: pointer;
}

button:active {
  background-color: var(--button-active-background-color);
}
</style>
