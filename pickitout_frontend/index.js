/**
 * @format
 */


 // import a library to help create components 
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './src/app.json';


// Render  component to evice
AppRegistry.registerComponent(appName, () => App);
