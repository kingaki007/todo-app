import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import App from './components/app';

import '../style/bootstrap.min.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container-fluid'));
