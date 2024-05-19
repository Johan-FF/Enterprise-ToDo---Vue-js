<template>
  <AdminLayout>
    <div class="admin-employee">
      <h2>Aquí debería haber una tabla con CRUD para employee</h2>
      <!-- Contenido de bienvenida para administradores -->
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";

export default {
  name: "AdminEmployees",
  components: {
    AdminLayout,
  },
};
</script>

<style scoped>
.admin-employee {
  padding: 20px;
  background-color: var(--color2);
  color: var(--color7);
  border-radius: 10px;
}

.admin-employee h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
