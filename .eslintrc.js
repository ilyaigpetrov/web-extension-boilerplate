'use strict';

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    webextensions: true,
  },
  globals: {
    chrome: true,
  },
  extends: [
    'plugin:flowtype/recommended',
    'eslint:recommended',
    'airbnb',
  ],
  plugins: [
    'flowtype',
  ],
  rules: {
    'arrow-parens': ['error', 'always'],
    'padded-blocks': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
  },
};
