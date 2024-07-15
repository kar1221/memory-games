module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', "**/*.config.ts", "**/*.config.js"],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  parserOptions: {
    project: "./tsconfig.app.json",
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
