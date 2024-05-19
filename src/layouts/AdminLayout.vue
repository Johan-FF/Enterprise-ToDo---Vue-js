<template>
    <div class="admin-layout">
      <SideBar v-if="user"></SideBar>
      <div class="main-content">
        <UserHeader v-if="user"></UserHeader>
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  import store from '../store';
  import SideBar from '@/components/SideBar.vue';
  import UserHeader from '@/components/UserHeader.vue';
  
  export default {
    name: 'AdminLayout',
    components: {
      SideBar,
      UserHeader
    },
    computed: {
      user() {
        return store.getters.user;
      }
    }
  }
  </script>
  
  <style scoped>
  .admin-layout {
    display: flex;
  }
  
  .main-content {
    flex: 1;
    padding: 1rem;
    background-color: var(--color1); /* Utilizando color1 como color de fondo para el contenido principal */
  }
  </style>
  