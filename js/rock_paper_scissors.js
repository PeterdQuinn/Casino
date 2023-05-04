const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const result = document.getElementById('result');

rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const winner = determineWinner(playerSelection, computerSelection);

    playerChoice.textContent = 'You chose: ' + playerSelection;
    computerChoice.textContent = 'Computer chose: ' + computerSelection;
    result.textContent = 'Result: ' + winner;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'You win!';
    }

    return 'You lose!';
}

