import layout from '@/views/layout/index.vue'

export default {
  path: '/news',
  component: layout,
  redirect: '/news/ranking',
  name: 'newsRanking',
  meta: {
    title: '新闻',
    icon: 'news'
  },
  children: [
    {
      path: '/news/ranking',
      component: () => import('@/views/news-ranking/index.vue'),
      meta: {
        title: '新闻排行',
        icon: 'newsRanking'
      }
    },
    {
      path: '/news/:id',
      component: () => import('@/views/news-detail/index.vue'),
      meta: {
        title: '新闻详情'
      }
    }
  ]
}
