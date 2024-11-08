/**
 * @format
 */

import {AppRegistry} from 'react-native';
import './gesture-handler';
import App from './src/App';
import './reanimatedConfig';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
