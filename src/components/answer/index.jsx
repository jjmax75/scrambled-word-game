import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import './answer.scss';

// Components
import Card from './../card/';

const getCards = (length, answer) => {
  const answerCards = [];
  for (let i = 0; i < length; i += 1) {
    answerCards.push(
      <Card
        letter={answer[i] || '?'}
        key={shortid.generate()}
      />,
    );
  }
  return answerCards;
};

const Answer = props => (
  <div className='answer'>
    { getCards(props.length, props.answer) }
  </div>
);

Answer.propTypes = {
  length: PropTypes.number.isRequired,
  answer: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Answer;
