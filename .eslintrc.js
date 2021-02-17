module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    cy: 'readonly',
    Cypress: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  root: true,
  rules: {
    'prefer-promise-reject-errors': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'no-return-assign': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
