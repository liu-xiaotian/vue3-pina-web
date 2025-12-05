import layout from '@/views/layout/index.vue'

export default {
  path: '/user',
  component: layout,
  redirect: '/user/manage',
  name: 'permission',
  meta: { title: '用户', icon: 'personnel' },
  children: [
    {
      path: '/user/permission',
      component: () => import('@/views/permission/index.vue'),
      meta: {
        title: '权限管理',
        icon: 'permission'
      }
    }
  ]
}
