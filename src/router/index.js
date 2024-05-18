import { createRouter, createWebHistory } from "vue-router";

import administratorRoutes from "@/modules/administrator/routes";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/login", component: LoginView, name: "login" },
  { path: "/register", component: RegisterView, name: "register" },
  {
    path: "/administrator",
    component: HomeView,
    name: "administrator",
    children: [...administratorRoutes],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
