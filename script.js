const revealBtn = document.getElementById('revealBtn')

function getCards() {
  const randomDeck = [...deck]
  randomDeck.sort(() => Math.random() - 0.5)

  const selectedCards = randomDeck.slice(0, 3)

  console.log(selectedCards)

  return selectedCards
}

revealBtn.addEventListener('click', () => {
  getCards()
})
