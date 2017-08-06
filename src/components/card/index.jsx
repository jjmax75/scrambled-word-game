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
      onDragStart={event => event.dataTransfer.setData('text/plain', props.letter)}
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
  // handleDrop: PropTypes.func,
};

Card.defaultProps = {
  draggable: false,
  modifier: undefined,
  // handleDrop: undefined,
};

export default Card;
