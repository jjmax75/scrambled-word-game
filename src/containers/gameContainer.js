import { connect } from 'react-redux';
import Game from './../components/game';
import actions from './../actions/';

const mapStateToProps = state => ({
  word: state.words.activeWord || '',
  wordBank: state.words.grade5,
});

const mapDispatchToProps = dispatch => ({
  setActiveWord: (words) => {
    const length = words.length;
    const idx = Math.floor(Math.random() * length);
    dispatch(actions.setActiveWord(words[idx]));
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  setActiveWord: () => dispatchProps.setActiveWord(stateProps.wordBank),
  ...stateProps,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Game);
