const higherBtn = document.getElementById("higher-btn");
const lowerBtn = document.getElementById("lower-btn");
const currentNumber = document.getElementById("current-number");
const result = document.getElementById("result");

let currentNum = generateRandomNumber();
currentNumber.textContent = currentNum;

higherBtn.addEventListener("click", () => {
  playGame(true);
});

lowerBtn.addEventListener("click", () => {
  playGame(false);
});

function playGame(isHigher) {
  const newNumber = generateRandomNumber();
  const isCorrect = (isHigher && newNumber > currentNum) || (!isHigher && newNumber < currentNum);

  currentNum = newNumber;
  currentNumber.textContent = currentNum;
  
  result.textContent = isCorrect ? "You guessed correctly!" : "Oops! Wrong guess!";
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
