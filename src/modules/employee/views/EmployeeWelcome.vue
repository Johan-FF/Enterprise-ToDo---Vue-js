<template>
  <AdminLayout>
    <div class="employee-welcome">
      <WelcomeMessage />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import WelcomeMessage from "@/components/WelcomeMessage.vue";

export default {
  name: "EmployeeWelcome",
  components: {
    AdminLayout,
    WelcomeMessage,
  },
};
</script>

<style scoped>
@import "@/assets/styles.css";

.employee-welcome {
  padding: 20px;
  background-color: var(--color2);
  color: var(--color7);
  border-radius: 10px;
}

.employee-welcome h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>