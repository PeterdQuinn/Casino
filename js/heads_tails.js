document.addEventListener("DOMContentLoaded", function() {
    const headsBtn = document.getElementById("heads-btn");
    const tailsBtn = document.getElementById("tails-btn");
    const playerChoice = document.getElementById("player-choice");
    const computerChoice = document.getElementById("computer-choice");
    const result = document.getElementById("result");
    const balance = document.getElementById("balance");
    const bet1 = document.getElementById("bet-1");
    const bet5 = document.getElementById("bet-5");
    const bet10 = document.getElementById("bet-10");
  
    let currentBalance = 100;
    balance.textContent = `$${currentBalance}`;
  
    function playGame(playerChoice) {
      // get random computer choice
      const randomNumber = Math.floor(Math.random() * 2);
      const computerChoice = randomNumber === 0 ? "Heads" : "Tails";
  
      // update player and computer choices
      playerChoice.textContent = `You chose: ${playerChoice}`;
      computerChoice.textContent = `Coin landed on: ${computerChoice}`;
  
      // determine result
      const isCorrect = playerChoice.toLowerCase() === computerChoice.toLowerCase();
      if (isCorrect) {
        result.textContent = "You guessed correctly! You won $10!";
        currentBalance += 10;
      } else {
        result.textContent = "Oops! Wrong guess! You lost $10!";
        currentBalance -= 10;
      }
  
      // update balance
      balance.textContent = `$${currentBalance}`;
    }
  
    // add event listeners to buttons
    headsBtn.addEventListener("click", () => {
      playGame("Heads");
    });
  
    tailsBtn.addEventListener("click", () => {
      playGame("Tails");
    });
  
    bet1.addEventListener("click", () => {
      if (currentBalance >= 1) {
        currentBalance -= 1;
        balance.textContent = `$${currentBalance}`;
        playGame("Heads");
      }
    });
  
    bet5.addEventListener("click", () => {
      if (currentBalance >= 5) {
        currentBalance -= 5;
        balance.textContent = `$${currentBalance}`;
        playGame("Heads");
      }
    });
  
    bet10.addEventListener("click", () => {
      if (currentBalance >= 10) {
        currentBalance -= 10;
        balance.textContent = `$${currentBalance}`;
        playGame("Heads");
      }
    });
  });
  