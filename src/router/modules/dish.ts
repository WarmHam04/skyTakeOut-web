export default {
  path: "/dish",
  name: "dishParent",
  meta: {
    title: "菜品管理"
  },
  children: [
    {
      path: "/dish/index",
      name: "Dish",
      component: () => import("@/views/dish/index.vue"),
      meta: {
        title: "菜品列表"
      }
    }
  ]
};
