/*
 * @Author: liqingshan
 * @Date: 2021-11-29 10:17:40
 * @LastEditTime: 2021-11-29 11:16:27
 * @LastEditors: liqingshan
 * @FilePath: \qs-vue-template\.eslintrc.js
 * @Description:
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended', // 使用 Vue3 的校验规则
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'global-require': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  },
  settings: {
    'import/core-modules': ['windi.css']
  }
}
