document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform validation or send login data to the server
    // You can use AJAX or fetch to send the login data to the server for further processing

    // Example AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                // Login successful
                window.location.href = "dashboard.html"; // Redirect to the dashboard page
            } else {
                // Login failed
                alert(response.message); // Display an error message
            }
        }
    };
    var data = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
    xhr.send(data);
});
