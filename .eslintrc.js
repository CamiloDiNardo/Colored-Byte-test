module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: 'warn',
    semi: 'off',
    'no-unused-vars': 'warn',
    indent: 'off',
    'comma-dangle': 'off',
    'no-undef': 'off',
    eqeqeq: 'off',
    'prefer-const': 'off',
    'space-before-function-paren': 'off',
    'no-new': 'off',
  },
};
