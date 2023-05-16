var cards = [];
var flippedCards = [];
var matchedCards = [];

function generateCards() {
  var numbers = generateNumberPairs(1, 100);
  numbers.forEach(function(number) {
    cards.push({ flipped: false, number: number });
  });
  shuffleCards(cards);
  renderCards();
}

function generateNumberPairs(start, end) {
  var pairs = [];
  for (var i = start; i <= end; i++) {
    pairs.push(i, i);
  }
  return pairs;
}

function shuffleCards(cards) {
  for (var i = cards.length - 1; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var temp = cards[i];
    cards[i] = cards[randomIndex];
    cards[randomIndex] = temp;
  }
}

function renderCards() {
  var cardGrid = document.querySelector(".card-grid");
  cardGrid.innerHTML = "";

  cards.forEach(function(card, index) {
    var cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.textContent = card.flipped ? card.number : "";
    cardElement.addEventListener("click", function() {
      flipCard(index);
    });
    cardGrid.appendChild(cardElement);
  });
}

function flipCard(index) {
  if (!cards[index].flipped && flippedCards.length < 2) {
    cards[index].flipped = true;
    flippedCards.push(index);
    renderCards();

    if (flippedCards.length === 2) {
      var card1 = flippedCards[0];
      var card2 = flippedCards[1];

      if (cards[card1].number === cards[card2].number) {
        matchedCards.push(card1, card2);
        flippedCards = [];

        if (matchedCards.length === cards.length) {
          setTimeout(function() {
            alert("Congratulations! You've matched all the cards!");
            resetGame();
          }, 500);
        }
      } else {
        setTimeout(function() {
          cards[card1].flipped = false;
          cards[card2].flipped = false;
          flippedCards = [];
          renderCards();
        }, 1000);
      }
    }
  }
}

function resetGame() {
  cards = [];
  flippedCards = [];
  matchedCards = [];
  generateCards();
}

// Generate and start the game
generateCards();
