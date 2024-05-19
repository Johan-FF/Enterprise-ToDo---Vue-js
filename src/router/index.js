import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
import AdminWelcome from '@/modules/administrator/views/AdminWelcome.vue';

// Definimos las rutas del módulo de administrador directamente aquí
const administratorRoutes = [
  {
    path: '',
    name: 'admin-welcome',
    component: AdminWelcome
  },
  // Puedes agregar más rutas según sea necesario para el módulo de administrador
];

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/administrator',
    component: AdminLayout,
    children: administratorRoutes // Renderizamos las rutas del módulo de administrador dentro de AdminLayout
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
