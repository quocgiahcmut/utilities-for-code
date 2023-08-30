module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended', // Sử dụng plugin cho Vue
    'plugin:vue/vue3-recommended', // Nếu bạn đang sử dụng Vue 3
    'plugin:vue/essential', // Nếu bạn chỉ muốn cơ bản
    'plugin:vue/vue3-essential' // Nếu bạn chỉ muốn cơ bản với Vue 3
  ],
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' }, // Sửa giá trị 'latest'
  plugins: [
    'vue', // Thêm plugin Vue
    'vue-hooks', // Nếu bạn sử dụng Vue Composition API
    'vue-refresh' // Nếu bạn muốn sử dụng Vue Refresh
  ],
  rules: {
    'vue-refresh/only-export-components': 'warn', // Tương tự với React Refresh
    'vue-hooks/rules-of-hooks': 'error', // Tương tự với React Hooks
    'vue-hooks/exhaustive-deps': 'warn', // Tương tự với React Hooks
    'vue/require-prop-types': 'off', // Tắt kiểm tra prop types
    'vue/require-default-prop': 'off', // Tắt kiểm tra default prop
    'vue/display-name': 'off', // Tắt kiểm tra displayName

    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*']
      }
    ],

    'no-console': 1,
    'no-lonely-if': 1,
    'no-unused-vars': 1,
    'no-trailing-spaces': 1,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': 1,
    'space-before-blocks': ['error', 'always'],
    'object-curly-spacing': [1, 'always'],
    indent: ['warn', 2],
    semi: [1, 'never'],
    quotes: ['error', 'single'],
    'array-bracket-spacing': 1,
    'linebreak-style': 0,
    'no-unexpected-multiline': 'warn',
    'keyword-spacing': 1,
    'comma-dangle': 1,
    'comma-spacing': 1,
    'arrow-spacing': 1
  }
};
