const higherBtn = document.getElementById("higher-btn");
const lowerBtn = document.getElementById("lower-btn");
const currentNumber = document.getElementById("current-number");
const result = document.getElementById("result");
const bet1Btn = document.getElementById("bet-1");
const bet5Btn = document.getElementById("bet-5");
const bet10Btn = document.getElementById("bet-10");

let currentNum = generateRandomNumber();
currentNumber.textContent = currentNum;

let currentBet = 1;

bet1Btn.classList.add("active");

bet1Btn.addEventListener("click", () => {
  currentBet = 1;
  setActiveBetButton(bet1Btn);
});

bet5Btn.addEventListener("click", () => {
  currentBet = 5;
  setActiveBetButton(bet5Btn);
});

bet10Btn.addEventListener("click", () => {
  currentBet = 10;
  setActiveBetButton(bet10Btn);
});

function setActiveBetButton(button) {
  bet1Btn.classList.remove("active");
  bet5Btn.classList.remove("active");
  bet10Btn.classList.remove("active");
  button.classList.add("active");
}

higherBtn.addEventListener("click", () => {
  playGame(true);
});

lowerBtn.addEventListener("click", () => {
  playGame(false);
});

function playGame(isHigher) {
  if (currentBet <= 0) {
    result.textContent = "Please place a bet to play.";
    return;
  }

  const newNumber = generateRandomNumber();
  const isCorrect = (isHigher && newNumber > currentNum) || (!isHigher && newNumber < currentNum);

  currentNum = newNumber;
  currentNumber.textContent = currentNum;
  
  result.textContent = isCorrect ? `You guessed correctly! You won $${currentBet}.` : "Oops! Wrong guess!";
  currentBet = isCorrect ? currentBet : currentBet * -1;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
