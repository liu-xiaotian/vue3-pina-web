import { createRouter, createWebHashHistory } from 'vue-router'
import { createWebHistory } from 'vue-router'

//公开路由
const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/layout/index.vue')
  }
]
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
