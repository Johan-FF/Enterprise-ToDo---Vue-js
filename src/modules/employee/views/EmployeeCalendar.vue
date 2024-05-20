<!-- EmployeeCalendar.vue -->

<template>
  <AdminLayout>
    <template v-slot:default>
      <AppCalendar v-if="showCalendar" />
    </template>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import AppCalendar from "@/components/AppCalendar.vue";

export default {
  name: "EmployeeCalendar",
  components: {
    AdminLayout,
    AppCalendar,
  },
  data() {
    return {
      showCalendar: true,
    };
  },
};
</script>

<style scoped>
/* Estilos específicos si es necesario */
</style>
