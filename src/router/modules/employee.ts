export default {
  path: "/employee",
  name: "employeeParent",
  meta: {
    title: "员工管理"
  },
  children: [
    {
      path: "/employee/index",
      name: "Employee",
      component: () => import("@/views/employee/index.vue"),
      meta: {
        title: "员工管理"
      }
    }
  ]
};
