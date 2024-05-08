let cards = document.querySelectorAll('.card')
const reStart = document.getElementById('resBtn')
let flippedCard = false
let freeze = false

let frontCard, backCard

//check for matched cards
function Match() {
  let matchedCards = getCard(frontCard) === getCard(backCard)

  matchedCards ? disableCard() : unFlip()
}
function getCard(singleCard) {
  singleCard.getAttribute('.card')
}

//flip cards and check whether they match()
function flipCard() {
  if (freeze) return
  this.classList.add('flip')
  if (!flippedCard) {
    flippedCard = true
    frontCard = this
    return
  }
  backCard = this
  Match()
}

function freezeCards() {
  frontCard.removeEventListener('click', flipCard())
  backCard.removeEventListener('click', flipCard)

  resetGame()
}
