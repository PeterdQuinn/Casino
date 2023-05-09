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
    
    // Add event listeners to the bet buttons
    const bet1Btn = document.getElementById("bet-1");
    const bet5Btn = document.getElementById("bet-5");
    const bet10Btn = document.getElementById("bet-10");
    
    bet1Btn.addEventListener("click", function() {
      placeBet(1);
    });
    
    bet5Btn.addEventListener("click", function() {
      placeBet(5);
    });
    
    bet10Btn.addEventListener("click", function() {
      placeBet(10);
    });
    
    // Function to place a bet
    function placeBet(amount) {
      console.log(`Placing a $${amount} bet`);
      // Add your code to place the bet here
    }
  });
  