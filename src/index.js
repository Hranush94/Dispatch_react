import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './containers/Map';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Map />
  </Provider>
  , document.getElementById('root'));
