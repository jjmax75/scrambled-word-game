# Scrambled Word Game
A game to help students learn vocabulary and spelling

## Requirements
1. The Game component accepts one parameter `word`
2. The Word is scrambled and broken down into letters inside cards: family becomes -> [ y ] [ l ] [ m ] [ f ] [ a ] [ l ] [ i ]
3. You can type letter after letter and the cards will start lining up. If you type: f, a, the cards will look like: [ f ], [ a ], ...
4. Pressing Backspace undoes the last step
5. Cards can also be dragged in order using mouse
6. When you press Enter the correctness of each card is checked out, correctly positioned ones are highlighted in green, incorrect ones are in red

## Dev notes
- eject after create-react-app for boilerplate app
- add e2e testing
- add redux

## Word bank
this demo uses the flollowing words which are Grade 5 level
shrewd, shrift, shrike, shrunk, thrill, three, thrash, threat, throng, throve, thrust, throat

## Running app
- `yarn start` to run app in development mode - live reload
- `yarn build` to build app for deployment, output to build folder

## Further development
- player chooses grade and is given appropriate word
- keep track of hard words and use approach like Anki flashcards - active recall testing and spaced repetition, https://apps.ankiweb.net/docs/manual.html#introduction
- teacher or player can select particular word bank from grade to cover only what is being taught in class that week
- score
- game - timed, multiplayer, etc...
- ordering of letters to positions they are dragged to rather than next available space
- improve UI/UX

## Additional info
Initially built this with the functionality to drag letters up to the answer area. Refactored after thinking more about requirement 5, Game now lets user move crads in the answer area.
