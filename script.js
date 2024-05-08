let cards = document.querySelectorAll('.card')
const reStart = document.getElementById('resBtn')
const cardsArr = []
let flippedCard = false
let freeze = false

let frontCard, backCard

// //check for matched cards
// function Match() {
//   let matchedCards = getCard(frontCard) === getCard(backCard)

//   matchedCards ? freezeCards() : unFlip()
// }
// function getCard(cardInfo) {
//   cardInfo.getAttribute('.card')
// }

// //flip cards and check whether they match()
// function flipCard() {
//   if (freeze) return
//   this.classList.add('flip')
//   if (!flippedCard) {
//     flippedCard = true
//     frontCard = this
//     return
//   }
//   backCard = this
//   Match()
// }

// function freezeCards() {
//   frontCard.removeEventListener('click', flipCard())
//   backCard.removeEventListener('click', flipCard())
// }

// //a method to unflip the card
// function unFlip() {
//   freeze = true
//   setTimeout(() => {
//     frontCard.classList.remove('flip')
//     backCard.classList.remove('flip')
//   }, 1000)
// }

// function resetGame() {
//   cards.forEach((card) => {
//     card.classList.remove('flip')
//     card.addEventListener('click', flipCard())
//   })
// }

function start() {
  if (this.getAttribute('disable') == 'true') return
  this.classList.add('flip')
  cardsArr.push(this)
  this.setAttribute('disable', 'true')
  console.log(cardsArr.length)
  if (cardsArr.length == 2) {
    if (
      cardsArr[0].getElementsByClassName('front')[0].getAttribute('id') ===
      cardsArr[1].getElementsByClassName('front')[0].getAttribute('id') //the 0 after (front) is allocated for the front elements inside the card
    ) {
      //console.log('matched')
      cardsArr.length = 0
    } else {
      //console.log('not matched')
      setTimeout(() => {
        cardsArr[0].classList.remove('flip')
        cardsArr[1].classList.remove('flip')
        cardsArr[0].removeAttribute('disable')
        cardsArr[1].removeAttribute('disable')
        cardsArr.length = 0
      }, 500)
    }
  }
}

cards.forEach((card) => {
  card.addEventListener('click', start)
})
