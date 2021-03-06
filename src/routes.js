require('babel-register')

import React, { Component } from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

//Imported Components
import FormComponent from './components/form-component';
import ReadComponent from './components/read-component';

//Redux Containers
import ReduxExample from './containers/redux-example';


//Redux Necessities
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import Reducers from './reducers/index';

//Middleware added.
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

//Reducers added to state.
//var store = createStoreWithMiddleware(Reducers);

var store = createStore(Reducers);


var routes = (


<Router history={browserHistory}>


      <Route path="/test/form" component={FormComponent} />
      <Route path="/test/read" component={ReadComponent} />
      <Route path="/test/redux" component={ReduxExample} />


</Router>




)

module.exports = routes;
