let cards = document.querySelectorAll('.card')
const reStart = document.getElementById('resBtn')
const cardsArr = []

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

function restartGame() {
  cardsArr.forEach((card) => {
    card.classList.remove('flip')
    card.removeAttribute('disable')
  })
  cardsArr.length = 0
  cards.forEach((card) => {
    card.style.order = Math.floor(Math.random() * 6)
  })
}

reStart.addEventListener('click', restartGame())
