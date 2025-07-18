export default {
  path: "/worktable",
  name: "WorkTableParent",
  redirect: "/worktable/index",
  meta: {
    title: "工作台",
    rank: 1
  },
  children: [
    {
      path: "/worktable/index",
      name: "WorkTable",
      component: () => import("@/views/worktable/index.vue"),
      meta: {
        title: "工作台"
      }
    }
  ]
};
