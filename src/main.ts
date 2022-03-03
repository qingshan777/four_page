/*
 * @Author: liqingshan
 * @Date: 2021-11-18 09:30:58
 * @LastEditTime: 2022-03-03 10:11:02
 * @LastEditors: liqingshan
 * @FilePath: \vue-template\src\main.ts
 * @Description:
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import App from './App.vue'
import './style/index.css'

const app = createApp(App)
app.mount('#app')
