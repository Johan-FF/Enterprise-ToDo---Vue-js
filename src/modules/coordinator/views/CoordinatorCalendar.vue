<!-- CoordinatorCalendar.vue -->

<template>
  <AdminLayout>
    <template v-slot:default>
      <AppCalendar :editable="true" />
    </template>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import AppCalendar from "@/components/AppCalendar.vue";

export default {
  name: "CoordinatorCalendar",
  components: {
    AdminLayout,
    AppCalendar,
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
