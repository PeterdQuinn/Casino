const slotsContainer = document.getElementById('slots-container');
const spinBtn = document.getElementById('spin-btn');
const totalSlots = 3;

createSlots();

spinBtn.addEventListener('click', () => {
  spinSlots();
});

function createSlots() {
  for (let i = 0; i < totalSlots; i++) {
    const slotElement = document.createElement('div');
    slotElement.className = 'slot';
    slotsContainer.appendChild(slotElement);
  }
}

function spinSlots() {
  const slots = document.querySelectorAll('.slot');

  for (const slot of slots) {
    const randomNumber = Math.floor(Math.random() * 10);
    slot.textContent = randomNumber;
  }
}
