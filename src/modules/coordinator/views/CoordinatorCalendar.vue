<template>
  <AdminLayout>
    <div class="coordinator-calendar">
      <h2>Esta es una prueba de contenido de coordinator-calendar</h2>
      <!-- Contenido de bienvenida para administradores -->
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";

export default {
  name: "CoordinatorCalendar",
  components: {
    AdminLayout,
  },
};
</script>

<style scoped>
.coordinator-calendar {
  padding: 20px;
  background-color: var(--color2);
  color: var(--color7);
  border-radius: 10px;
}

.coordinator-calendar h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
