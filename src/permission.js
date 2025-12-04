import router from '@/router/index'
import { useUserStore } from '@/stores/user'

const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
  let userStore = useUserStore()
  if (userStore.token) {
    if (to.path === '/login') {
      next('/home')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
