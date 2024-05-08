let cards = document.querySelectorAll('.card')
const reStart = document.getElementById('resBtn')
let flippedCard = false
let freeze = false

let frontCard, backCard

//check for matched cards
function Match() {
  let matchedCards = getCard(frontCard) === getCard(backCard)

  matchedCards ? freezeCards() : unFlip()
}
function getCard(cardInfo) {
  cardInfo.getAttribute('.card')
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
  backCard.removeEventListener('click', flipCard())

  resetBoard()
}

//a method to unflip the card
function unFlip() {
  freeze = true
  setTimeout(() => {
    frontCard.classList.remove('flip')
    backCard.classList.remove('flip')

    resetBoard()
  }, 1000)
}
function resetBoard() {
  ;[flipCard, freeze] = [false, false]
  ;[frontCard, backCard] = [null, null]
}

function resetGame() {
  cards.forEach((card) => {
    card.classList.remove('flip')
    card.addEventListener('click', flipCard())
  })
  resetBoard()
}
;(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 4)
    card.style.order = randomPos
  })
})
