/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

// Components
import Main from './components/Main';

// Data
import wordBank from './json/words.json';
import store from './store';
import actions from './actions/';

store.dispatch(actions.setInitialData(wordBank));

ReactDOM.render(
  <Provider>
    <Main />
  </Provider>,
  document.querySelector('#root'),
);
