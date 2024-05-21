<template>
  <AdminLayout>
    <div class="employee-projects">
      <CrudLayout
        :viewAddButton="false"
        :content="content"
        :itsProjects="true"
      />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import CrudLayout from "@/layouts/CrudLayout.vue";

export default {
  name: "EmployeeProjects",
  components: {
    AdminLayout,
    CrudLayout,
  },
  data() {
    return {
      content: [
        { name: "Juan", description: 30, city: "Madrid" },
        { name: "Ana", description: 25, city: "Barcelona" },
        { name: "Luis", description: 35, city: "Sevilla" },
      ],
    };
  },
};
</script>

<style scoped>
.employee-projects {
  width: 100%;
  height: 100%;
  background-color: var(--color2);
  color: var(--color7);
}
</style>
