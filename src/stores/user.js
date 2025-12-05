import { defineStore } from 'pinia'
import { login } from '@/api/user'
import md5 from 'md5'
import { setItem, getItem, clearItem } from '@/utils/storage'
import router from '@/router/index'
export const useUserStore = defineStore('user', {
  state: () => ({
    token: getItem('token'),
    avatar: getItem('avatar')
  }),
  getters: {},
  actions: {
    async userLogin(loginForm) {
      const loginData = {
        username: loginForm.value.username,
        password: md5(loginForm.value.password)
      }
      const res = await login(loginData)

      if (res.code === 200) {
        let token = res.data.token
        let avatar = res.data.avatar
        this.token = token
        this.avatar = avatar
        setItem('token', token)
        setItem('avatar', avatar)
        router.push('/home')
        return 'success'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
    logout() {
      this.token = null
      this.avatar = null
      clearItem()
      router.push('/login')
    }
  }
})
