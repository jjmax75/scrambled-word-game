import types from './../constants/';

export default (state = '', action) => {
  switch (action.type) {
    case types.SET_INITIAL_DATA:
      return action.data;

    default:
      return state;
  }
};
