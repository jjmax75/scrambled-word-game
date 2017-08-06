import types from './../constants';

const actions = {
  setInitialData(data) {
    return {
      type: types.SET_INITIAL_DATA,
      data,
    };
  },
  setActiveWord(word) {
    return {
      type: types.SET_ACTIVE_WORD,
      word,
    };
  },
};

export default actions;
