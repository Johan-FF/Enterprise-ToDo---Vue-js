<template>
  <div class="admin-layout">
    <SideBar v-if="user"></SideBar>
    <div class="main-content">
      <UserHeader v-if="user"></UserHeader>
      <AppLayout>
        <slot></slot>
      </AppLayout>
    </div>
  </div>
</template>

<script>
import store from "../store";
import SideBar from "@/components/SideBar.vue";
import UserHeader from "@/components/UserHeader.vue";
import AppLayout from "./AppLayout.vue";

export default {
  name: "AdminLayout",
  components: {
    SideBar,
    UserHeader,
    AppLayout,
  },
  computed: {
    user() {
      return store.getters.user;
    },
  },
};
</script>

<style scoped>
.admin-layout {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
}

.main-content {
  padding: 1rem;
  background-color: var(--color1);
}
</style>
