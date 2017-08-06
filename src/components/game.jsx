import React from 'react';
import PropTypes from 'prop-types';
import './game.scss';

// Components
import GetNewWord from './getNewWord/';
import Cards from './cards/';
import Answer from './answer/';
import Message from './message/';

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

    this.checkLetter = this.checkLetter.bind(this);

    this.state = {
      scrambledWord: [],
      answer: [],
      availableLetters: [],
      checkAnswer: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.word !== this.props.word) {
      const scrambledWord = this.constructor.scrambleWord(nextProps.word);
      this.setState({
        scrambledWord,
        availableLetters: scrambledWord,
        answer: [],
        checkAnswer: false,
      });
    }
  }

  checkLetter(key) {
    const checkAnswer = () => {
      if (this.state.answer.length === this.props.word.length) {
        const result = this.state.answer.join('') === this.props.word ?
          'Well done! Have another go :)' : 'Good effort, try again!';
        this.setState({
          message: result,
          checkAnswer: true,
        });
        this.hideMessage(1000);
      } else {
        this.setState({
          message: 'There are still some letters remaining',
        });
        this.hideMessage(500);
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
        this.setState({
          message: 'That letter is not available',
        });
        this.hideMessage(500);
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

  // handleDrop(event) {
  //   console.log(this.state.message, event);
  // }

  hideMessage(delay) {
    setTimeout(() => {
      this.setState({
        message: undefined,
      });
    }, delay);
  }

  render() {
    return (
      <div className='game'>
        <h1>Scrambled word game</h1>
        { this.props.word ?
          <div
            className='game__area'
            onKeyDown={
              event => this.checkLetter(event.key)
            }
            role='button'
            tabIndex='0'
          >
            <Answer
              word={this.props.word}
              answer={this.state.answer}
              checkAnswer={this.state.checkAnswer}
              checkLetter={this.checkLetter}
            />
            <Cards
              word={this.state.availableLetters}
            />
            { this.state.checkAnswer ?
              <GetNewWord clickHandler={this.props.setActiveWord} />
              :
              <div className='game__instructions'>
                <p>Type or drag the letters to spell the word</p>
                <p>Press Enter to check your answer</p>
              </div>
            }
          </div>
          :
          <GetNewWord clickHandler={this.props.setActiveWord} />
        }
        { this.state.message ?
          <Message text={this.state.message} /> : null
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
