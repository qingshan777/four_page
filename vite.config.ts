/*
 * @Author: liqingshan
 * @Date: 2021-11-17 11:06:42
 * @LastEditTime: 2021-11-29 11:10:20
 * @LastEditors: liqingshan
 * @FilePath: \qs-vue-template\vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/pages/index/index.html')
        // index: path.resolve(__dirname, "./index.html"),
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  }
})
