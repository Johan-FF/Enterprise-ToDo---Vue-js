<template>
  <AdminLayout>
    <div class="employee-calendar">
      <h2>Esta es una prueba de contenido de employee-calendar</h2>
      <!-- Contenido de bienvenida para administradores -->
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";

export default {
  name: "EmployeeCalendar",
  components: {
    AdminLayout,
  },
};
</script>

<style scoped>
.employee-calendar {
  padding: 20px;
  background-color: var(--color2);
  color: var(--color7);
  border-radius: 10px;
}

.employee-calendar h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
