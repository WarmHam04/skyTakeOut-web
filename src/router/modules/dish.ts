export default {
  path: "/dish",
  name: "dishParent",
  redirect: "/dish/index",
  meta: {
    title: "菜品管理",
    rank: 5
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
