/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

// Components
import MainContainer from './containers/mainContainer';

// Data
import wordBank from './json/words.json';
import store from './store';
import actions from './actions/';

store.dispatch(actions.setInitialData(wordBank));

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.querySelector('#root'),
);
