import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './about';
import {AppRegistry} from 'react-native';

import { createStore,combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers';

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(reducers,  applyMiddleware(thunk,middleware));

/*
AppRegistry.registerComponent('App', ()=> App);
AppRegistry.runApplication('App', {
  rootTag : document.getElementById('root')
})

*/

ReactDOM.render(<Provider store={store}>

  <ConnectedRouter history={history}>
  <div>

    <Route exact path="/" component={App}/>
    <Route path="/about" component={About}/>
{/*    <Route path="/topics" component={Topics}/>  */}
  </div>
</ConnectedRouter>



</Provider>, document.getElementById('root'));
registerServiceWorker();
