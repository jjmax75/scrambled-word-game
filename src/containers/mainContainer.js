import { connect } from 'react-redux';
import Main from './../components/Main';

const mapStateToProps = state => ({
  words: state.wordBank,
});

export default connect(
  mapStateToProps,
)(Main);
