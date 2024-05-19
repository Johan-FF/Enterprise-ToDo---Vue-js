import AdminWelcome from "../views/AdminWelcome.vue";
import AdminRoles from "../views/AdminRoles.vue";
import AdminEmployees from "../views/AdminEmployees.vue";

const administratorRoutes = [
  {
    path: "",
    name: "admin-welcome",
    component: AdminWelcome,
  },
  {
    path: "/roles",
    name: "admin-roles",
    component: AdminRoles,
  },
  {
    path: "/employees",
    name: "admin-employees",
    component: AdminEmployees,
  },
];

export default administratorRoutes;
