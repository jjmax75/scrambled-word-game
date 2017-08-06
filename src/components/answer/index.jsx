import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import './answer.scss';

// Components
import Card from './../card/';

const getCards = (word, answer, checkAnswer) => {
  const getClassName = i => (
    word[i] === answer[i] ? 'correct' : 'incorrect'
  );

  const answerCards = [];
  for (let i = 0; i < word.length; i += 1) {
    const letter = answer[i] || '?';
    answerCards.push(
      <Card
        letter={letter}
        key={shortid.generate()}
        modifier={checkAnswer ? getClassName(i) : null}
        block='answer'
      />,
    );
  }
  return answerCards;
};

const Answer = props => (
  <div
    className='answer'
    onDragOver={event => event.preventDefault()}
    onDrop={event => props.checkLetter(event.dataTransfer.getData('text/plain'))}
  >
    { getCards(props.word, props.answer, props.checkAnswer) }
  </div>
);

Answer.propTypes = {
  word: PropTypes.string.isRequired,
  answer: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  checkAnswer: PropTypes.bool.isRequired,
  checkLetter: PropTypes.func.isRequired,
};

export default Answer;
