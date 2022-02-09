/*
 * @Author: liqingshan
 * @Date: 2021-11-17 11:06:42
 * @LastEditTime: 2022-02-09 14:42:24
 * @LastEditors: liqingshan
 * @FilePath: \qs-vue-template\vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  }
})
