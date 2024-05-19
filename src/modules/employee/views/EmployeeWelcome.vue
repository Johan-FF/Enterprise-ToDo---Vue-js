<template>
  <AdminLayout>
    <div class="employee-welcome">
      <h2>Esta es una prueba de contenido de employee-welcome</h2>
      <!-- Contenido de bienvenida para administradores -->
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";

export default {
  name: "EmployeeWelcome",
  components: {
    AdminLayout,
  },
};
</script>

<style scoped>
.employee-welcome {
  padding: 20px;
  background-color: var(--color2);
  color: var(--color7);
  border-radius: 10px;
}

.employee-welcome h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
