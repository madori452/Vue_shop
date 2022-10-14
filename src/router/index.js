import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Admin/Login')
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard'),
    children: [{
      path: 'prodcuts',
      component: () => import('../views/Admin/Product')
    },
    {
      path: 'coupon',
      component: () => import('../views/Admin/Coupon')
    },
    {
      path: 'order',
      component: () => import('../views/Admin/Order')
    },
    {
      path: 'article',
      component: () => import('../views/Admin/Article')
    }
    ]
  },
  {
    path: '/user',
    name: 'User',
    // 用戶端導覽列
    component: () => import('../views/Front/UserDashboard'),
    children: [

      {
      // 用戶端首頁
        path: 'index',
        component: () => import('../views/Front/Index')
      }, {
      // 用戶端產品列表
        path: 'products',
        component: () => import('../views/Front/Products')
      },
      {
      // 用戶端單一產品
        path: 'product/:productId',
        component: () => import('../views/Front/Product')
      },
      // 用戶端購物車
      {
        path: 'cart',
        component: () => import('../views/Front/Cart')
      },

      // 用戶端文章
      {
        path: 'articles',
        component: () => import('../views/Front/Articles')
      },
      {
        path: 'article/:articleId',
        component: () => import('../views/Front/Article')
      }

    ]
  },
  // 結帳
  {
    path: '/',
    component: () => import('../views/Front/UserDashboard'),

    children: [{
      path: 'checkout/:orderId',
      component: () => import('../views/Front/Checkout')
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 路由點擊active
  linkActiveClass: 'active'
})

export default router
