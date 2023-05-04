const numberPool = document.getElementById('number-pool');
const drawBtn = document.getElementById('draw-btn');
const result = document.getElementById('result');
const maxNumbers = 50;
const numberSelection = 6;
const selectedNumbers = new Set();

createNumberPool();

numberPool.addEventListener('click', (e) => {
  if (e.target.classList.contains('number')) {
    toggleNumber(e.target);
  }
});

drawBtn.addEventListener('click', drawWinningNumbers);

function createNumberPool() {
  for (let i = 1; i <= maxNumbers; i++) {
    const numberElement = document.createElement('div');
    numberElement.className = 'number';
    numberElement.textContent = i;
    numberPool.appendChild(numberElement);
  }
}

function toggleNumber(numberElement) {
  if (numberElement.classList.contains('selected')) {
    numberElement.classList.remove('selected');
    selectedNumbers.delete(Number(numberElement.textContent));
  } else if (selectedNumbers.size < numberSelection) {
    numberElement.classList.add('selected');
    selectedNumbers.add(Number(numberElement.textContent));
  }

  drawBtn.disabled = selectedNumbers.size !== numberSelection;
}

function drawWinningNumbers() {
  const winningNumbers = new Set();

  while (winningNumbers.size < numberSelection) {
    const randomNumber = Math.floor(Math.random() * maxNumbers) + 1;
    winningNumbers.add(randomNumber);
  }

  result.textContent = `Winning numbers: ${[...winningNumbers].join(', ')}`;
}
