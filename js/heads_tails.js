const headsBtn = document.getElementById('heads-btn');
const tailsBtn = document.getElementById('tails-btn');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const result = document.getElementById('result');

headsBtn.addEventListener('click', () => playGame('heads'));
tailsBtn.addEventListener('click', () => playGame('tails'));

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const winner = determineWinner(playerSelection, computerSelection);

    playerChoice.textContent = 'You chose: ' + playerSelection;
    computerChoice.textContent = 'Coin landed on: ' + computerSelection;
    result.textContent = 'Result: ' + winner;
}

function getComputerChoice() {
    return Math.random() < 0.5 ? 'heads' : 'tails';
}

function determineWinner(playerSelection, computerSelection) {
    return playerSelection === computerSelection ? 'You win!' : 'You lose!';
}
