/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {AppContainer} from './src/navigators/appContainer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppContainer);
