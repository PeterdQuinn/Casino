const rollBtn = document.getElementById('roll-btn');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');

rollBtn.addEventListener('click', () => {
  const dice1Value = getRandomDiceValue();
  const dice2Value = getRandomDiceValue();

  dice1.textContent = dice1Value;
  dice2.textContent = dice2Value;
});

function getRandomDiceValue() {
  return Math.floor(Math.random() * 6) + 1;
}
