export default {
  path: "/employee",
  name: "employeeParent",
  redirect: "/employee/index",
  meta: {
    title: "员工管理",
    rank: 7
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
