module.exports = {
    root: true,
    extends: ['plugin:@typescript-eslint/recommended', 'react-app', 'react-app/jest', 'prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    },
  };
  