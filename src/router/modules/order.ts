export default {
  path: "/order",
  name: "orderParent",
  meta: {
    title: "订单管理"
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
