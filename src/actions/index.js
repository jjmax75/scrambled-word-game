import types from './../constants';

const actions = {
  setInitialData(data) {
    return {
      type: types.SET_INITIAL_DATA,
      data,
    };
  },
};

export default actions;
