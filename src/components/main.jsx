import React from 'react';
import './main.scss';

// Components
import GetNewWord from './getNewWord/';
import Word from './word';

const Main = () => (
  <div className='main'>
    <h1>Scrambled word game</h1>
    <Word />
    <Word />
    <GetNewWord />
  </div>
);

export default Main;
