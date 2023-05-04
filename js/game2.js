document.addEventListener("DOMContentLoaded", function() {
  const triggerBtn = document.getElementById("trigger-btn");
  const result = document.getElementById("result");

  triggerBtn.addEventListener("click", function() {
      const randomNumber = Math.random();

      if (randomNumber < 0.1666) {
          result.textContent = "Bang! Your time to go!";
      } else {
          result.textContent = "Click! Not your time amigo!";
      }
  });
});
