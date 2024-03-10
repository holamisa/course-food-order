module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // [parser] typescript를 parser로 사용하도록 함
  // parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/prop-types': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'no-unused-vars': 'warn',
    // 'react/react-in-jsx-scope': 'off',
    // 'react/jsx-uses-react': 'error',
    // 'react/jsx-fragments': 'error',
    // 'react/jsx-no-undef': 'error',
    // 'react/prop-types': 'warn',
    // 'react/self-closing-comp': 'error',
    // 'react/no-unescaped-entities': 'error',
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react/jsx-uses-vars': 'error',
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // 'linebreak-style': 0,
    // 'jsx-a11y/label-has-associated-control': [
    //   2,
    //   {
    //     labelAttributes: ['htmlFor'],
    //   },
    // ],
  },
};
