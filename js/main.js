document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
    
    // Check if the user is logged in (in this example, using a simple flag in localStorage)
    if (localStorage.getItem("loggedIn")) {
      welcomeMessage.textContent = "Welcome back! Choose a game to play!";
    } else {
      welcomeMessage.textContent = "Please log in or register to play.";
    }
  });
  