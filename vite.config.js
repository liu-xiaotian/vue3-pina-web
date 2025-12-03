import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
// 引入 Node.js 内置的 path 模块
import path from 'path'
// 引入svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 引入mock
import { viteMockServe } from 'vite-plugin-mock'
// 静态资源压缩
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //配置静态资源压缩
    viteCompression({
      verbose: true, //是否在控制台输出压缩结果
      threshold: 10240, //只有文件大于10kb才会被压缩
      algorithm: 'gzip', //压缩算法
      ext: '.gz', //生成压缩文件的后缀
      deleteOriginFile: false //是否删除源文件
    }),
    vueJsx(),
    vueDevTools(),
    //  配置 SVG 图标插件
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    viteMockServe({
      mockPath: 'mock', // mock 数据存放目录
      localEnabled: true, // 开发环境启用
      prodEnabled: false // 生产环境是否启用
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/index.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
