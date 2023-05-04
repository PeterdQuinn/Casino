const dealerHand = document.getElementById('dealer-hand');
const playerHand = document.getElementById('player-hand');
const dealBtn = document.getElementById('deal-btn');
const hitBtn = document.getElementById('hit-btn');
const standBtn = document.getElementById('stand-btn');
const result = document.getElementById('result');

let deck = [];

dealBtn.addEventListener('click', startGame);
hitBtn.addEventListener('click', playerHit);
standBtn.addEventListener('click', playerStand);

function startGame() {
  // Initialize the deck and hands
  deck = generateDeck();
  dealerHand.innerHTML = '';
  playerHand.innerHTML = '';
  result.textContent = '';

  // Shuffle the deck
  shuffleDeck(deck);

  // Deal two cards to each player
  addCard(playerHand, deck.pop());
  addCard(playerHand, deck.pop());
  addCard(dealerHand, deck.pop());
  addCard(dealerHand, deck.pop());

  // Enable/disable buttons
  dealBtn.disabled = true;
  hitBtn.disabled = false;
  standBtn.disabled = false;
}

function playerHit() {
  // Add a card to the player's hand
  addCard(playerHand, deck.pop());

  // Check if the player's hand value is over 21
  if (getHandValue(playerHand) > 21) {
    result.textContent = 'Player bust! Dealer wins!';
    endGame();
  }
}

function playerStand() {
  // Add cards to the dealer's hand until the value is 17 or greater
  while (getHandValue(dealerHand) < 17) {
    addCard(dealerHand, deck.pop());
  }

  // Compare dealer and player hand values
  const dealerValue = getHandValue(dealerHand);
  const playerValue = getHandValue(playerHand);

  if (dealerValue > 21 || playerValue > dealerValue) {
    result.textContent = 'Player wins!';
  } else if (dealerValue === playerValue) {
    result.textContent = 'Draw!';
  } else {
    result.textContent = 'Dealer wins!';
  }

  endGame();
}

function endGame() {
  // Disable hit and stand buttons, enable deal button
  hitBtn.disabled = true;
  standBtn.disabled = true;
  dealBtn.disabled = false;
}

function addCard(hand, card) {
  const cardElement = document.createElement('div');
  cardElement.className = 'card';
  cardElement.textContent = card.rank + card.suit;
  hand.appendChild(cardElement);
}

function generateDeck() {
  const suits = ['♠', '♣', '♥', '♦'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const deck = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ rank, suit, value: getCardValue(rank) });
    }
  }

  return deck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function getHandValue(hand) {
    const cards = Array.from(hand.querySelectorAll('.card'));
    let value = 0;
    let aces = 0;
  
    for (const card of cards) {
      const cardValue = card.textContent.slice(0, -1); // Remove suit from card text
      const cardNumericValue = getCardValue(cardValue);
  
      if (cardValue === 'A') {
        aces++;
      }
  
      value += cardNumericValue;
    }
  
    // Handle aces (can be either 1 or 11)
    while (value > 21 && aces > 0) {
      value -= 10;
      aces--;
    }
  
    return value;
  }
  
