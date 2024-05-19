<!-- EmployeeCalendar.vue -->

<template>
  <AdminLayout>
    <template v-slot:default>
      <CalendarComponent v-if="showCalendar" />
    </template>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import CalendarComponent from "@/components/CalendarComponent.vue";

export default {
  name: "EmployeeCalendar",
  components: {
    AdminLayout,
    CalendarComponent,
  },
  data() {
    return {
      showCalendar: false,
    };
  },
};
</script>

<style scoped>
/* Estilos específicos si es necesario */
</style>
