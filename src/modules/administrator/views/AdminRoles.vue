<template>
  <AdminLayout>
    <div class="admin-roles">
      <CrudLayout
        :fields="fieldsNewForm"
        @submit="handleRoleSubmit"
        :content="content"
      />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import CrudLayout from "@/layouts/CrudLayout.vue";

export default {
  name: "AdminRoles",
  components: {
    AdminLayout,
    CrudLayout,
  },
  data() {
    return {
      fieldsNewForm: [
        {
          name: "roleName",
          label: "Nombre del Rol",
          type: "text",
          placeholder: "Ingrese el nombre del rol",
        },
        { name: "isCoordinator", label: "Es Coordinador", type: "checkbox" },
        {
          name: "description",
          label: "Descripción",
          type: "textarea",
          placeholder: "Ingrese una descripción",
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
    handleRoleSubmit(formData) {
      console.log("Role Form submitted:", formData);
    },
  },
};
</script>

<style scoped>
.admin-roles {
  width: 100%;
  height: 100%;
  background-color: var(--color2);
  color: var(--color7);
}
</style>
