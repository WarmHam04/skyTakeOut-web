export default {
  path: "/setmeal",
  name: "setmealParent",
  redirect: "/setmeal/index",
  meta: {
    title: "套餐管理",
    rank: 4
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
