import layout from '@/views/layout/index.vue'

export default {
  path: '/user',
  component: layout,
  redirect: '/user/manage',
  name: 'userManage',
  meta: {
    title: '用户',
    icon: 'user'
  },
  children: [
    {
      path: '/user/manage',
      component: () => import('@/views/user-manage/index.vue'),
      meta: {
        title: '用户管理',
        icon: 'userManage'
      }
    },
    {
      path: '/user/info/:id',
      name: 'userInfo',
      component: () => import('@/views/user-info/index.vue'),
      props: true,
      meta: {
        title: '用户信息'
      }
    },
    {
      path: '/user/import',
      name: 'import',
      component: () => import('@/views/import/index.vue'),
      meta: {
        title: '导入'
      }
    }
  ]
}
