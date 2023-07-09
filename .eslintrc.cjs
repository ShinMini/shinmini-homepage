// .eslintrc.js
module.exports = {
  ignorePatterns: ['node_modules/', 'build/', 'public/', 'dist/', 'dist-electron/', 'electron/'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['react-app', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {},
};
