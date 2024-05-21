<template>
  <AdminLayout>
    <div class="coordinator-welcome">
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";

export default {
  name: "CoordinatorWelcome",
  components: {
    AdminLayout,
  },
};
</script>

<style scoped>
.coordinator-welcome {
  padding: 20px;
  background-color: var(--color2);
  color: var(--color7);
  border-radius: 10px;
}

.coordinator-welcome h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
