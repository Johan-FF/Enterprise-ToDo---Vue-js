<template>
  <div id="register-view">
    <AppHeader />
    <AppLayout>
      <div id="form-container">
        <h1 class="title">Registro</h1>
        <form @submit.prevent="submitForm" class="register-form">
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
            <label for="contactName">Nombre del contacto principal</label>
            <input
              type="text"
              id="contactName"
              v-model="contactName"
              required
            />
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
          <div class="form-group">
            <label for="contactPhone"
              >Número de contacto del contacto principal</label
            >
            <input
              type="tel"
              id="contactPhone"
              v-model="contactPhone"
              required
            />
          </div>
          <button type="submit" class="button-style default-button">
            Registrarse
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
      contactName: "",
      companyPhone: "",
      contactPhone: "",
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes manejar el envío del formulario
      const formData = {
        companyName: this.companyName,
        industry: this.industry,
        employeeCount: this.employeeCount,
        address: this.address,
        city: this.city,
        postalCode: this.postalCode,
        country: this.country,
        contactName: this.contactName,
        companyPhone: this.companyPhone,
        contactPhone: this.contactPhone,
      };
      console.log("Formulario de registro enviado", formData);
    },
  },
};
</script>

<style scoped>
#register-view {
  background-color: var(--color2);
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
