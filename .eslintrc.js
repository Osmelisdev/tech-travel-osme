module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier'
  ],
  rules: {
    plugins: ['react', 'react-hooks', 'prettier'],
    rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'no-unused-expressions': 'off',    
    'import/prefer-default-export': 'off',
    'no unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/jsx-one-expression-per-line': 'off',
    'no-param-reassing': 'off',
    camelcase: 'off',
    'no-console': 'off',
    'react/jsx-props-nospreading': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'prettier/prettier': ['error', {tabWidth: 4}],
    'react/jsx-no-constructed-context-values': 'off'

  }
}
}