<template>
  <AdminLayout>
    <div class="admin-roles">
      <CrudLayout />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import CrudLayout from "@/layouts/CrudLayout.vue";

export default {
  name: "AdminRoles",
  components: {
    AdminLayout,
    CrudLayout,
  },
};
</script>

<style scoped>
.admin-roles {
  width: 100%;
  height: 100%;
  background-color: var(--color2);
  color: var(--color7);
}
</style>
