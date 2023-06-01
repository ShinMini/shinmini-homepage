// .eslintrc.js
export default {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['react-app', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  exclude: ['/node_modules/*', '/public/*'],
  rules: {
    // 여기에 추가 규칙을 정의할 수 있습니다.
  },
};
