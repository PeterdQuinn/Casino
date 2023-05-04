const spinBtn = document.getElementById('spin-btn');
const result = document.getElementById('result');
const wheel = document.getElementById('wheel');
const ctx = wheel.getContext('2d');
const totalSpins = 10;
let currentSpins = 0;
let currentAngle = 0;

const prizes = ['Prize 1', 'Prize 2', 'Prize 3', 'Prize 4', 'Prize 5', 'Prize 6'];
const colors = ['#ffcc00', '#0099cc'];

drawWheel(currentAngle);

spinBtn.addEventListener('click', () => {
  if (currentSpins < totalSpins) {
    const angle = Math.random() * 2 * Math.PI;
    const prizeIndex = Math.floor(angle / (2 * Math.PI / prizes.length));
    const prize = prizes[prizeIndex];

    result.textContent = `Result: ${prize}`;
    currentAngle += angle;
    drawWheel(currentAngle);
    currentSpins++;
  } else {
    alert('You have reached the maximum number of spins.');
  }
});

function drawWheel(angle) {
  const radius = wheel.width / 2;
  ctx.translate(radius, radius);

  ctx.save();
  ctx.rotate(angle);
  ctx.clearRect(-wheel.width / 2, -wheel.height / 2, wheel.width, wheel.height);

  for (let i = 0; i < prizes.length; i++) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, (i * 2 * Math.PI) / prizes.length, ((i + 1) * 2 * Math.PI) / prizes.length);
    ctx.lineTo(0, 0);
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
  }

  ctx.restore();
}
