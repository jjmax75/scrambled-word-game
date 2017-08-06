import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import './cards.scss';

// Componets
import Card from './../card/';

const handleDrop = () => {
  console.log('dropped');
};

const getCards = wordArr => wordArr.map(letter => (
  <Card
    key={shortid.generate()}
    letter={letter}
    draggable
    block='cards'
    handleDrop={event => handleDrop(event)}
  />
));

const Cards = props => (
  <div className='cards'>
    { getCards(props.word) }
  </div>
);

Cards.propTypes = {
  word: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Cards;
