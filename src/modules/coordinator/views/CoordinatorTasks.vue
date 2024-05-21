<template>
  <AdminLayout>
    <div class="coordinator-tasks">
      <h2>{{ title }}</h2>
      <TasksProgress />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import TasksProgress from "@/components/TasksProgress.vue";

export default {
  name: "CoordinatorTasks",
  components: {
    AdminLayout,
    TasksProgress,
  },
  data() {
    return {
      title: this.$route.params.projectName,
    };
  },
};
</script>

<style scoped>
.coordinator-tasks {
  width: 100%;
  height: 100%;
  background-color: var(--color2);
  color: var(--color7);
}
</style>
