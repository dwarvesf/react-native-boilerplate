import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';

const host = NativeModules?.SourceCode?.scriptURL.split('://')[1].split(':')[0];

const tron = Reactotron.configure({host, name: 'React Native', port: 9090})
  .useReactNative() // add all built-in react native plugins
  .connect();

console.log = tron.log;
