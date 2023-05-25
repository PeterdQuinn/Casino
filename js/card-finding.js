/* cardgame.js */

document.querySelectorAll('.card').forEach(function(card) {
  card.addEventListener('click', function() {
      alert('Card ' + this.textContent + ' clicked!');
  });
});
