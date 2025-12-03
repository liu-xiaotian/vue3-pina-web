import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 完整引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus)
app.mount('#app')
