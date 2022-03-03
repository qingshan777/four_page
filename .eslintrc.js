/*
 * @Author: liqingshan
 * @Date: 2021-11-29 10:17:40
 * @LastEditTime: 2022-03-03 10:34:41
 * @LastEditors: liqingshan
 * @FilePath: \vue-template\.eslintrc.js
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
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never'
      }
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['acc']
      }
    ]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue']
      }
    }
  },
  overrides: [
    {
      files: ['src/views/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0
      }
    }
  ]
}
