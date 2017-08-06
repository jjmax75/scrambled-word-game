import types from './../constants/';

export default (state = '', action) => {
  switch (action.type) {
    case types.SET_INITIAL_DATA:
      return action.data;

    case types.SET_ACTIVE_WORD:
      return {
        ...state,
        activeWord: action.word,
      };

    default:
      return state;
  }
};
