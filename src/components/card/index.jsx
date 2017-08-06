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
};

Card.defaultProps = {
  draggable: false,
  modifier: undefined,
};

export default Card;
