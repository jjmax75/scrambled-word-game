/* global window */

import { createStore } from 'redux';
import appReducers from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
