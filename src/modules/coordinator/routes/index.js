import CoordinatorWelcome from "../views/CoordinatorWelcome.vue";
import CoordinatorProjects from "../views/CoordinatorProjects.vue";
import CoordinatorCalendar from "../views/CoordinatorCalendar.vue";
import CoordinatorTasks from "../views/CoordinatorTasks.vue";

const coordinatorRoutes = [
  {
    path: "",
    name: "coordinator-welcome",
    component: CoordinatorWelcome,
  },
  {
    path: "/projects",
    name: "coordinator-projects",
    component: CoordinatorProjects,
  },
  {
    path: "/calendar",
    name: "coordinator-calendar",
    component: CoordinatorCalendar,
  },
  {
    path: "/tasks",
    name: "coordinator-tasks",
    component: CoordinatorTasks,
  },
];

export default coordinatorRoutes;
