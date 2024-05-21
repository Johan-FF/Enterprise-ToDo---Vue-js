<template>
  <AdminLayout>
    <div class="employee-tasks">
      <TasksProgressEmployee />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import TasksProgressEmployee from "../components/TasksProgressEmployee.vue";

export default {
  name: "EmployeeTasks",
  components: {
    AdminLayout,
    TasksProgressEmployee,
  },
};
</script>

<style scoped>
.employee-tasks {
  width: 100%;
  height: 100%;
  background-color: var(--color2);
  color: var(--color7);
}
</style>
