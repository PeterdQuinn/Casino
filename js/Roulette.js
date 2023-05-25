/* roulette.js */

document.addEventListener('DOMContentLoaded', (event) => {
  const spinButton = document.querySelector('.spin-button');
  const rouletteNumber = document.querySelector('.roulette-number');
  const betBoxes = document.querySelectorAll('.bet-box');
  let selectedNumber = null;

  spinButton.addEventListener('click', () => {
      const number = Math.floor(Math.random() * 36) + 1;
      rouletteNumber.textContent = number;
      if (selectedNumber === number) {
          alert('You win!');
      } else {
          alert('You lose!');
      }
      selectedNumber = null;
  });

  betBoxes.forEach(box => {
      box.addEventListener('click', () => {
          selectedNumber = parseInt(box.dataset.number, 10);
          betBoxes.forEach(b => b.classList.remove('selected'));
          box.classList.add('selected');
      });
  });
});
/* roulette.js */

var spinDegree = 0; // Move this variable outside the event handler

document.getElementById('spin').addEventListener('click', function() {
    var rouletteWheel = document.querySelector('.roulette-wheel');
    spinDegree += Math.random() * 360 + 360 * 5; // Add to the existing rotation
    rouletteWheel.style.transform = 'rotate(' + spinDegree + 'deg)';
});

