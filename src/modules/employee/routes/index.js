import EmployeeWelcome from "../views/EmployeeWelcome.vue";
import EmployeeProjects from "../views/EmployeeProjects.vue";
import EmployeeCalendar from "../views/EmployeeCalendar.vue";
import EmployeeTasks from "../views/EmployeeTasks.vue";

const employeeRoutes = [
  {
    path: "",
    name: "employee-welcome",
    component: EmployeeWelcome,
  },
  {
    path: "/projects",
    name: "employee-projects",
    component: EmployeeProjects,
  },
  {
    path: "/calendar",
    name: "employee-calendar",
    component: EmployeeCalendar,
  },
  {
    path: "/tasks/:projectName",
    name: "employee-tasks",
    component: EmployeeTasks,
  },
];

export default employeeRoutes;
