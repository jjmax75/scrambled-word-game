import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = props => (
  <div
    className='card'
    draggable={props.draggable}
  >
    {props.letter}
  </div>
);

Card.propTypes = {
  letter: PropTypes.string.isRequired,
  draggable: PropTypes.bool,
};

Card.defaultProps = {
  draggable: false,
};

export default Card;
