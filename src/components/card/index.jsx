import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = (props) => {
  const getClassname = () => (
    props.modifier ?
      `${props.block}__card--${props.modifier}`
      : `${props.block}__card`
  );

  return (
    <div
      className={getClassname()}
      draggable={props.draggable}
      onDragStart={event => event.dataTransfer.setData('text/plain', event.target.dataset.index)}
      onDragOver={event => event.preventDefault()}
      onDrop={event =>
        props.swapCards(event.dataTransfer.getData('text/plain'), props.cardIndex)}
      data-index={props.cardIndex}
    >
      {props.letter}
    </div>
  );
};

Card.propTypes = {
  letter: PropTypes.string.isRequired,
  draggable: PropTypes.bool,
  modifier: PropTypes.string,
  block: PropTypes.string.isRequired,
  cardIndex: PropTypes.number,
  swapCards: PropTypes.func,
};

Card.defaultProps = {
  draggable: false,
  modifier: undefined,
  cardIndex: undefined,
  swapCards: undefined,
};

export default Card;
