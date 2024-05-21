<template>
  <AdminLayout>
    <div class="admin-welcome">
      <WelcomeMessage />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import WelcomeMessage from "@/components/WelcomeMessage.vue";

export default {
  name: "AdminWelcome",
  components: {
    AdminLayout,
    WelcomeMessage,
  },
};
</script>

<style scoped>
@import "@/assets/styles.css";

.admin-welcome {
  padding: 20px;
  background-color: var(--color2);
  color: var(--color7);
  border-radius: 10px;
}

.admin-welcome h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>