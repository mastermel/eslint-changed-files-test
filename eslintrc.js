module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2021,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'unicorn'
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'rules': {
    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    'no-trailing-spaces': 'error',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'react/prop-types': 0,
    'unicorn/filename-case': [
      'error',
      {
        'case': 'kebabCase'
      }
    ]
  }
}
