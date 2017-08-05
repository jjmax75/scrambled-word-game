import { connect } from 'react-redux';
import Main from './../components/main';

const mapStateToProps = state => ({
  words: state.wordBank,
});

export default connect(
  mapStateToProps,
)(Main);
