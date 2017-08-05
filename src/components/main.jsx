import React from 'react';
import PropTypes from 'prop-types';
import './main.scss';

// Components
import GetNewWord from './getNewWord/';
import Word from './word';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.pickRandomWord = this.pickRandomWord.bind(this);
    this.state = {
      currentWord: this.pickRandomWord(),
    };
  }

  pickRandomWord() {
    return this.props.words[Math.floor(Math.random() * this.props.words.length)];
  }

  render() {
    return (
      <div className='main'>
        <h1>Scrambled word game</h1>
        <Word />
        <Word />
        <GetNewWord
          clickHandler={this.pickRandomWord}
        />
      </div>
    );
  }
}

Main.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Main;
