export default {
  path: "/worktable",
  name: "WorkTableParent",
  meta: {
    title: "工作台"
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
