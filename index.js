/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {AppContainer} from './src/navigators/appContainer';
import {name as appName} from './app.json';
// export {default} from './storybook';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => AppContainer);
