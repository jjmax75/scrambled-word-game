import { combineReducers } from 'redux';

import words from './words';

const appReducers = combineReducers({
  words,
});

export default appReducers;
