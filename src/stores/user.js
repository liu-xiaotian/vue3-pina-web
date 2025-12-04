import { defineStore } from 'pinia'
import { login } from '@/api/user'
export const useUserStore = defineStore('user', {
  state: () => ({}),
  getters: {},
  actions: {
    async userLogin(loginForm) {
      //TODO:登录
      try {
        const loginData = {
          username: loginForm.value.username,
          password: loginForm.value.password
        }
        const res = await login(loginData)
        console.log(res)
      } catch (error) {
        console.error('登录失败')
      }
    }
  }
})
