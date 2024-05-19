<template>
  <AdminLayout>
    <div class="employee-projects">
      <h2>Esta es una prueba de contenido de employee-projects</h2>
      <!-- Contenido de bienvenida para administradores -->
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";

export default {
  name: "EmployeeProjects",
  components: {
    AdminLayout,
  },
};
</script>

<style scoped>
.employee-projects {
  padding: 20px;
  background-color: var(--color2);
  color: var(--color7);
  border-radius: 10px;
}

.employee-projects h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
