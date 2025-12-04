import { defineStore } from 'pinia'
import { login } from '@/api/user'
export const useUserStore = defineStore('user', {
  state: () => ({
    token: ''
  }),
  getters: {},
  actions: {
    async userLogin(loginForm) {
      const loginData = {
        username: loginForm.value.username,
        password: loginForm.value.password
      }
      const res = await login(loginData)

      if (res.code === 200) {
        this.token = res.data.token
        return 'success'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    }
  }
})
