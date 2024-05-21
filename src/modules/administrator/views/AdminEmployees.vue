<template>
  <AdminLayout>
    <div class="admin-employee">
      <CrudLayout
        :fields="fieldsNewForm"
        @submit="handleUserSubmit"
        :content="content"
      />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import CrudLayout from "@/layouts/CrudLayout.vue";

export default {
  name: "AdminEmployees",
  components: {
    AdminLayout,
    CrudLayout,
  },
  data() {
    return {
      fieldsNewForm: [
        {
          name: "firstName",
          label: "Nombre",
          type: "text",
          placeholder: "Ingrese su nombre",
        },
        {
          name: "lastName",
          label: "Apellido",
          type: "text",
          placeholder: "Ingrese su apellido",
        },
        {
          name: "email",
          label: "Correo",
          type: "email",
          placeholder: "Ingrese su correo",
        },
        {
          name: "cedula",
          label: "Cédula",
          type: "text",
          placeholder: "Ingrese su cédula",
        },
        {
          name: "role",
          label: "Rol",
          type: "select",
          options: [
            { value: "admin", text: "Administrador" },
            { value: "user", text: "Usuario" },
          ],
        },
      ],
      content: [
        { name: "Juan", description: 30, city: "Madrid" },
        { name: "Ana", description: 25, city: "Barcelona" },
        { name: "Luis", description: 35, city: "Sevilla" },
      ],
    };
  },
  methods: {
    handleUserSubmit(formData) {
      console.log("User Form submitted:", formData);
    },
  },
};
</script>

<style scoped>
.admin-employee {
  width: 100%;
  height: 100%;
  background-color: var(--color2);
  color: var(--color7);
}
</style>
