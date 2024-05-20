<template>
  <AdminLayout>
    <div class="coordinator-projects">
      <CrudLayout />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import CrudLayout from "@/layouts/CrudLayout.vue";

export default {
  name: "CoordinatorProjects",
  components: {
    AdminLayout,
    CrudLayout,
  },
};
</script>

<style scoped>
.coordinator-projects {
  width: 100%;
  height: 100%;
  background-color: var(--color2);
  color: var(--color7);
}
</style>
