module.exports = {
  extends: [
    '@whastings/eslint-config-whastings',
    'plugin:react/recommended'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: [
    'react'
  ],

  rules: {
    'jsx-quotes': 'error',
    'react/jsx-no-target-blank': 'error'
  }
};
