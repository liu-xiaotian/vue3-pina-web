import { defineStore } from 'pinia'
import { login } from '@/api/user'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import router from '@/router/index'
export const useUserStore = defineStore('user', {
  state: () => ({
    token: getItem('token')
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
        this.token = token
        setItem('token', token)
        router.push('/home')
        return 'success'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    }
  }
})
