module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'import/prefer-default-export': ['off'],
    'no-await-in-loop': ['off'],
    'no-console': ['error', { allow: ['error'] }],
    'no-param-reassign': ['off'],
    'no-restricted-syntax': ['off'],
    'no-underscore-dangle': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/function-component-definition': ['off'],
    'react/no-array-index-key': ['off'],
    'react/no-unstable-nested-components': ['warn'],
    'react/require-default-props': ['off'],
    '@typescript-eslint/no-redeclare': ['off'],
    '@typescript-eslint/no-shadow': ['off'],
    'react/jsx-no-useless-fragment': ['off', { allowExpressions: true }],
  },
}
