export default {
  path: "/setmeal",
  name: "setmealParent",
  meta: {
    title: "套餐管理"
  },
  children: [
    {
      path: "/setmeal/index",
      name: "Setmeal",
      component: () => import("@/views/setmeal/index.vue"),
      meta: {
        title: "套餐管理"
      }
    }
  ]
};
