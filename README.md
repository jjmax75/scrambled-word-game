# - scrambled word game

## - requirements
1. The Game component accepts one parameter `word`
2. The Word is scrambled and broken down into letters inside cards: family becomes -> [ y ] [ l ] [ m ] [ f ] [ a ] [ l ] [ i ]
3. You can type letter after letter and the cards will start lining up. If you type: f, a, the cards will look like: [ f ], [ a ], ...
4. Pressing Backspace undoes the last step
5. Cards can also be dragged in order using mouse
6. When you press Enter the correctness of each card is checked out, correctly positioned ones are highlighted in green, incorrect ones are in red

## - approach
- eject after create-react-app for boilerplate app
- add e2e testing
- add redux
