/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import News from './src/News';
// import ToDo from './src/ToDo';
// import App from './src4/App';
// import Shopping from './src2/Shopping';
import Router from './src13/Router';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);