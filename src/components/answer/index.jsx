import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import './answer.scss';

// Components
import Card from './../card/';

const getCards = (props) => {
  const getClassName = i => (
    props.word[i] === props.answer[i] ? 'correct' : 'incorrect'
  );

  const answerCards = [];
  for (let i = 0; i < props.word.length; i += 1) {
    const letter = props.answer[i] || '?';
    answerCards.push(
      <Card
        letter={letter}
        key={shortid.generate()}
        cardIndex={i}
        modifier={props.checkAnswer ? getClassName(i) : null}
        block='answer'
        draggable
        swapCards={props.swapCards}
      />,
    );
  }
  return answerCards;
};

const Answer = props => (
  <div
    className='answer'
  >
    { getCards(props) }
  </div>
);

Answer.propTypes = {
  word: PropTypes.string.isRequired,
  answer: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  checkAnswer: PropTypes.bool.isRequired,
  swapCards: PropTypes.func.isRequired,
};

export default Answer;
