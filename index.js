module.exports = {
  extends: 'eslint:recommended',

  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  rules: {
    'arrow-parens': 'error',
    camelcase: 'error',
    'consistent-return': 'error',
    curly: 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'func-call-spacing': 'error',
    'keyword-spacing': 'error',
    'max-len': ['warn', {code: 100}],
    'no-console': 'off',
    'no-debugger': 'error',
    'no-eq-null': 'error',
    'no-param-reassign': 'warn',
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', 'nofunc'],
    'one-var': ['error', 'never'],
    quotes: ['error', 'single'],
    radix: 'error',
    semi: 'error',
    'space-before-function-paren': ['error', 'never'],
    'spaced-comment': 'error',
    'use-isnan': 'error'
  }
};
