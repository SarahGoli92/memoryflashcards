let myCards = document.querySelectorAll('.card')
let flippedCards = []
const reStart = document.getElementById('resBtn')

const frontImages = [
  {
    id: 1,
    image: 'images/1.jpg'
  },
  {
    id: 2,
    image: 'images/2.jpg'
  },
  {
    id: 3,
    image: 'images/5.jpg'
  },
  { id: 4, image: 'images/1.jpg' },
  { id: 5, image: 'images/2.jpg' },
  {
    id: 6,
    image: 'images/5.jpg'
  }
]

const gameRestart = () => {
  let flippedCard = document.getElementsByClassName('card front')
  frontImages.sort(() => Math.random() - 0.5)
}
reStart.addEventListener('click', gameRestart())
