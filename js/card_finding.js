const cardsContainer = document.getElementById('cards-container');
const resetBtn = document.getElementById('reset-btn');
const totalCards = 12;
let foundCards = 0;

createCards();

resetBtn.addEventListener('click', () => {
  cardsContainer.innerHTML = '';
  foundCards = 0;
  createCards();
});

function createCards() {
  const cards = generateCardsArray(totalCards);

  for (const card of cards) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.dataset.value = card;

    cardElement.addEventListener('click', () => {
      if (!cardElement.classList.contains('found')) {
        cardElement.textContent = card;
        cardElement.classList.add('found');
        foundCards++;

        if (foundCards === totalCards) {
          alert('You found all the cards!');
        }
      }
    });

    cardsContainer.appendChild(cardElement);
  }
}

function generateCardsArray(count) {
  const cards = Array.from({ length: count / 2 }, (_, i) => i + 1).concat(
    Array.from({ length: count / 2 }, (_, i) => i + 1)
  );

  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}
