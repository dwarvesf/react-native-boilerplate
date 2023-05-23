module.exports = {
  env: {
    es2021: true,
    'react-native/react-native': true,
  },
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native'],
  rules: {
    semi: 'off',
  },
  root: true,
  settings: {
    'react-native/style-sheet-object-names': [
      'EStyleSheet',
      'OtherStyleSheet',
      'PStyleSheet',
    ],
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['@api', './src/api'],
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@constants', './src/constants'],
          ['@contexts', './src/contexts'],
          ['@core', './src/core'],
          ['@hooks', './src/hooks'],
          ['@navigators', './src/navigators'],
          ['@screens', './src/screens'],
          ['@services', './src/services'],
          ['@styles', './src/styles'],
          ['@translation', './src/translation'],
          ['@types', './src/types'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
}
