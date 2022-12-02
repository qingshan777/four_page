/*
 * @Author: liqingshan
 * @Date: 2021-11-17 11:06:42
 * @LastEditTime: 2022-12-02 13:44:36
 * @LastEditors: liqingshan
 * @FilePath: \vue-template\vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue']
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
