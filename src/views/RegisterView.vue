<template>
  <AppLayout>
    <div class="register-view">
      <AppHeader />
      <h1>
        Con el fin de conocer tu compañia necesitaremos los siguientes datos
      </h1>
      <form @submit.prevent="submitForm" class="register-form">
        <div class="form-group">
          <label for="companyName">Nombre de la compañía</label>
          <input type="text" id="companyName" v-model="companyName" required />
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
          <input type="text" id="contactName" v-model="contactName" required />
        </div>
        <div class="form-group">
          <label for="companyPhone">Número de contacto de la compañía</label>
          <input type="tel" id="companyPhone" v-model="companyPhone" required />
        </div>
        <div class="form-group">
          <label for="contactPhone"
            >Número de contacto del contacto principal</label
          >
          <input type="tel" id="contactPhone" v-model="contactPhone" required />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </AppLayout>
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
.register-view {
  text-align: center;
  margin-top: 50px;
}
.register-form {
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
</style>
