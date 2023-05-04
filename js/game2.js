document.addEventListener("DOMContentLoaded", function() {
  const triggerBtn = document.getElementById("trigger-btn");
  const result = document.getElementById("result");

  triggerBtn.addEventListener("click", function() {
      const randomNumber = Math.random();

      if (randomNumber < 0.1666) {
          result.textContent = "Bang! You lost!";
      } else {
          result.textContent = "Click! You're safe!";
      }
  });
});
