export default {
  path: "/dat",
  name: "datParent",
  meta: {
    title: "数据管理"
  },
  children: [
    {
      path: "/dat/index",
      name: "Dat",
      component: () => import("@/views/dat/index.vue"),
      meta: {
        title: "数据管理"
      }
    }
  ]
};
