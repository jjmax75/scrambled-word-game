import React from 'react';
import PropTypes from 'prop-types';
import './message.scss';

const Message = props => (
  <div
    className='message'
  >
    { props.text }
  </div>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
