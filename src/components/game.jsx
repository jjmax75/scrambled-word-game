import React from 'react';
import PropTypes from 'prop-types';
import './game.scss';

// Components
import GetNewWord from './getNewWord/';
import Cards from './cards/';
import Answer from './answer/';

class Game extends React.Component {
  static scrambleWord(word) {
    const wordArr = word.split('');
    for (let i = wordArr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = wordArr[i];
      wordArr[i] = wordArr[j];
      wordArr[j] = temp;
    }
    return wordArr;
  }

  constructor(props) {
    super(props);

    this.state = {
      scrambledWord: [],
      answer: [],
      availableLetters: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.word !== this.props.word) {
      const scrambledWord = this.constructor.scrambleWord(nextProps.word);
      this.setState({
        scrambledWord,
        availableLetters: scrambledWord,
      });
    }
  }

  handleKeyDown(key) {
    const checkAnswer = () => {
      if (this.state.answer.length === this.props.word.length) {
        const result = this.state.answer.join('') === this.props.word ?
          'Well done!' : 'Not correct';
        console.log('Result:', result);
      } else {
        console.log('you haven\'t used all the letters yet');
      }
    };

    const removeLastLetter = () => {
      const length = this.state.answer.length;
      if (length > 0) {
        const lastLetter = this.state.answer[length - 1];
        this.setState({
          answer: [
            ...this.state.answer.slice(0, -1),
          ],
          availableLetters: this.state.availableLetters.concat([lastLetter]),
        });
      }
    };

    const addLetter = (letter) => {
      const keyIdx = this.state.availableLetters.indexOf(letter);
      if (keyIdx !== -1) {
        this.setState({
          answer: this.state.answer.concat([letter]),
          availableLetters: [
            ...this.state.availableLetters.slice(0, keyIdx),
            ...this.state.availableLetters.slice(keyIdx + 1),
          ],
        });
      } else {
        console.log('not in available letters');
      }
    };

    switch (key) {
      case 'Enter':
        checkAnswer();
        break;
      case 'Backspace':
        removeLastLetter();
        break;
      default:
        addLetter(key);
    }
  }

  render() {
    return (
      <div className='game'>
        <h1>Scrambled word game</h1>
        { this.props.word ?
          <div
            className='game__area'
            onKeyDown={
              event => this.handleKeyDown(event.key)
            }
            role='button'
            tabIndex='0'
          >
            <Answer
              length={this.props.word.length}
              answer={this.state.answer}
            />
            <Cards word={this.state.availableLetters} />
            <p>Type or drag the letters to spell the word</p>
            <p>Press Enter to check your answer</p>
          </div>
          :
          <GetNewWord clickHandler={this.props.setActiveWord} />
        }
      </div>
    );
  }
}

Game.propTypes = {
  word: PropTypes.string.isRequired,
  setActiveWord: PropTypes.func.isRequired,
};

export default Game;
