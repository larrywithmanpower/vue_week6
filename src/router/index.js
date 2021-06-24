import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // 前台
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        // ! 設定為空，就可以取代layout變為首頁
        path: '',
        component: () => import('../views/fronted/Home.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/fronted/Cart.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/fronted/Products.vue'),
      },
      {
        path: '/login',
        component: () => import('../views/Login.vue'),
      },
    ],
  },
  {
    path: '/product/:id',
    component: () => import('../views/fronted/SingleProduct.vue'),
  },
  //  後台
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/Orders.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/admin/Coupon.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

export default router;
