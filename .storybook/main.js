/** @type { import('@storybook/react-webpack5').StorybookConfig } */

module.exports = {
  stories: ['../src/components/**/*.stories.?(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-react-native-web',
  ],
}
