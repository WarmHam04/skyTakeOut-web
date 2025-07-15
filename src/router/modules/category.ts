export default {
  path: "/category",
  name: "categoryParent",
  redirect: "/category/index",
  meta: {
    title: "分类管理",
    rank: 6
  },
  children: [
    {
      path: "/category/index",
      name: "Category",
      component: () => import("@/views/category/index.vue"),
      meta: {
        title: "分类管理"
      }
    }
  ]
};
