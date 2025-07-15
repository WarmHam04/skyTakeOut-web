export default {
  path: "/dat",
  name: "datParent",
  redirect: "/dat/index",
  meta: {
    title: "数据管理",
    rank: 2
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
