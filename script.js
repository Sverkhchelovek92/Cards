const revealBtn = document.getElementById('revealBtn')

function getCards() {
  const randomDeck = [...deck]
  randomDeck.sort(() => Math.random() - 0.5)

  const selectedCards = randomDeck.slice(0, 3)

  console.log(selectedCards)

  return selectedCards
}

revealBtn.addEventListener('click', () => {
  const revealedCards = getCards()

  const cardsContainer = document.getElementById('cards')
  cardsContainer.innerHTML = ''

  revealedCards.forEach((card) => {
    const img = document.createElement('img')
    img.src = `img/${card.file}`
    cardsContainer.appendChild(img)
  })
})
