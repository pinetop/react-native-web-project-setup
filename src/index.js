import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppRegistry} from 'react-native'
import registerServiceWorker from './registerServiceWorker';

/*
AppRegistry.registerComponent('App', ()=> App);
AppRegistry.runApplication('App', {
  rootTag : document.getElementById('root')
})

*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
