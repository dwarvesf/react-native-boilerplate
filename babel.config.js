module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@api': ['./src/api'],
          '@assets': ['./src/assets'],
          '@components': ['./src/components'],
          '@constants': ['./src/constants'],
          '@contexts': ['./src/contexts'],
          '@core': ['./src/core'],
          '@hooks': ['./src/hooks'],
          '@navigators': ['./src/navigators'],
          '@screens': ['./src/screens'],
          '@services': ['./src/services'],
          '@styles': ['./src/styles'],
          '@translations': ['./src/translations'],
          '@types': ['./src/types'],
          '@utils': ['./src/utils'],
        },
      },
    ],
  ],
}
