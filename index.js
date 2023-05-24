/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { AppContainer } from './src/navigators'
import { name as appName } from './app.json'
// export {default} from './storybook';
import { initLocalization } from '@translations'

initLocalization()

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

AppRegistry.registerComponent(appName, () => AppContainer)
