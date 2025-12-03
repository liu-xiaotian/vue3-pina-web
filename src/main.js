import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 完整引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:svg-icons-register' // 注册 SVG 图标

import App from './App.vue'
import router from './router'

//测试环境变量
console.log(import.meta.env, '~~~~~~')
//动态设置标题
document.title = import.meta.env.VITE_APP_TITLE

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus)
app.mount('#app')
