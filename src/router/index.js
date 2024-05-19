import { createRouter, createWebHistory } from "vue-router";

import administratorRoutes from "@/modules/administrator/routes";
import coordinatorRoutes from "@/modules/coordinator/routes";
import employeeRoutes from "@/modules/employee/routes";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/administrator",
    name: "administrator",
    children: administratorRoutes,
  },
  {
    path: "/coordinator",
    name: "coordinator",
    children: coordinatorRoutes,
  },
  {
    path: "/employee",
    name: "employee",
    children: employeeRoutes,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
