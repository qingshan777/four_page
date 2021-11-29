/*
 * @Author: liqingshan
 * @Date: 2021-11-17 11:06:42
 * @LastEditTime: 2021-11-29 11:53:16
 * @LastEditors: liqingshan
 * @FilePath: \qs-vue-template\vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  }
})
