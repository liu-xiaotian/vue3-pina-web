import { createRouter, createWebHashHistory } from 'vue-router'
import { createWebHistory } from 'vue-router'
import layout from '@/views/layout/index.vue'
import UserManage from './modules/UserManage'
import RoleList from './modules/RoleList'
import Permission from './modules/Permission'
import News from './modules/News'
import CreateNews from './modules/CreateNews'

//私有路由
export const privateRoutes = [UserManage, RoleList, Permission, News, CreateNews]

//公开路由
const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/home',
    component: layout
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue')
  }
]
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
