import { connect } from 'react-redux';
// import actions from './../actions/';
import Main from './../components/Main';

const mapStateToProps = state => ({
  word: state.words.grade5[0],
});

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(
  mapStateToProps,
)(Main);
