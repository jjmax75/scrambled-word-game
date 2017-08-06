import React from 'react';
import PropTypes from 'prop-types';
import './getNewWord.scss';

const GetNewWord = props => (
  <button
    className='get-new-word'
    onClick={props.clickHandler}
  >
    Get New Word
  </button>
);

GetNewWord.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default GetNewWord;
