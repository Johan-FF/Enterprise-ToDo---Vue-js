<template>
  <AdminLayout>
    <div class="admin-employee">
      <CrudLayout />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import CrudLayout from "@/layouts/CrudLayout.vue";

export default {
  name: "AdminEmployees",
  components: {
    AdminLayout,
    CrudLayout,
  },
};
</script>

<style scoped>
.admin-employee {
  width: 100%;
  height: 100%;
  background-color: var(--color2);
  color: var(--color7);
}
</style>
