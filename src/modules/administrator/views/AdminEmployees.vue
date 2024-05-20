<template>
  <AdminLayout>
    <div class="admin-employee">
      <div>
        <AppSearch />
        <button id="add-button">Add</button>
      </div>
      <div></div>
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import AppSearch from "@/components/AppSearch.vue";

export default {
  name: "AdminEmployees",
  components: {
    AdminLayout,
    AppSearch,
  },
};
</script>

<style scoped>
.admin-employee {
  width: 100%;
  height: 100%;
  background-color: var(--color2);
  color: var(--color7);
  display: grid;
  grid-template-rows: 10% 90%;
}
.admin-employee div:nth-child(1) {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#add-button {
  height: fit-content;
  padding: 8px;
  cursor: pointer;
  border-radius: 16px;
  border-width: 1px;
  background-color: var(--color1);
}
</style>
