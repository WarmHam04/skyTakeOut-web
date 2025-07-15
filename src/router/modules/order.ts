export default {
  path: "/order",
  name: "orderParent",
  redirect: "/order/index",
  meta: {
    title: "订单管理",
    rank: 3
  },
  children: [
    {
      path: "/order/index",
      name: "Order",
      component: () => import("@/views/order/index.vue"),
      meta: {
        title: "订单管理"
      }
    }
  ]
};
