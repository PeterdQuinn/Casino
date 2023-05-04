const spinBtn = document.getElementById("spin-btn");
const triggerBtn = document.getElementById("trigger-btn");
const result = document.getElementById("result");

let bulletPosition;

spinBtn.addEventListener("click", () => {
  spinCylinder();
  triggerBtn.disabled = false;
  result.textContent = "";
});

triggerBtn.addEventListener("click", () => {
  pullTrigger();
});

function spinCylinder() {
  bulletPosition = Math.floor(Math.random() * 6) + 1;
}

function pullTrigger() {
  const triggerResult = Math.floor(Math.random() * 6) + 1;

  if (triggerResult === bulletPosition) {
    result.textContent = "Bang! You lost!";
    triggerBtn.disabled = true;
  } else {
    result.textContent = "Click! You survived!";
  }
}
