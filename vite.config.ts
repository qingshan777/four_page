/*
 * @Author: liqingshan
 * @Date: 2021-11-17 11:06:42
 * @LastEditTime: 2022-03-03 10:41:25
 * @LastEditors: liqingshan
 * @FilePath: \vue-template\vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
})
