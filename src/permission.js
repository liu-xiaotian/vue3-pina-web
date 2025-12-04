import router from '@/router/index'
import { useUserStore } from '@/stores/user'

router.beforeEach((to, from, next) => {
  let userStore = useUserStore()
  if (userStore.token) {
    if (to.path === '/login') {
      next('/home')
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
