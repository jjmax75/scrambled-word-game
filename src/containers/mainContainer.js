import { connect } from 'react-redux';
import Main from './../components/main';

const mapStateToProps = state => ({
  words: state.words.grade5,
});

export default connect(
  mapStateToProps,
)(Main);
