import layout from '@/views/layout/index.vue'

export default {
  path: '/news',
  component: layout,
  redirect: '/news/ranking',
  name: 'createNews',
  meta: { title: '新闻', icon: 'news' },
  children: [
    {
      path: '/create/news',
      component: () => import('@/views/create-news/index.vue'),
      meta: {
        title: '创建新闻',
        icon: 'createNews'
      }
    },
    {
      path: '/news/editor/:id',
      component: () => import('@/views/create-news/index.vue'),
      meta: {
        title: '新闻编辑'
      }
    }
  ]
}
