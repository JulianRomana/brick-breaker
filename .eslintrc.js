module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'max-len': ['warn', {
      code: 100,
      ignoreComments: true,
      ignoreStrings: true,
      // fix for svg icons
      ignorePattern: 'd=([s]*?)',
    }],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }],
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
