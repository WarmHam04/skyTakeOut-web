export default {
  path: "/category",
  name: "categoryParent",
  meta: {
    title: "分类管理"
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
