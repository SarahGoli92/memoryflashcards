## The Game's Pseudo Code

1. create variables to hold: matching cards, game state..
2. let the matching cards have matching value/class value.
3. Display flash cards faced down upon website's launching.
4. When the game is not finished (loop):

- the player clicks on any card to flip it considering its faced down.
- track the cards to see if they match.
- if the cards are matched keep them facing up (no actions/clicks will change their state until the restart button clicked).
  if the cards don't match, flip them down again.

4. when the game is finished and all cards are faced up, a winning message will pop up and it's only allowed to click the restart button or close the browser.
5. Reset button tracks the clicks to Restart the game.
