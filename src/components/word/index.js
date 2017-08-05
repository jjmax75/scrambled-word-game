import React from 'react';
import './word.scss';

// Componets
import Letter from './../letter/';

const Word = () => (
  <span className='word'>
    Word
    <Letter />
  </span>
);

export default Word;
