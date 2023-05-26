<?php
session_start();

// Define your valid credentials
$validUsername = 'admin';
$validPassword = 'password';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve submitted username and password from the form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Perform validation
    if ($username === $validUsername && $password === $validPassword) {
        // Authentication successful
        $_SESSION['username'] = $username;
        $response = array('success' => true);
        echo json_encode($response);
        exit;
    } else {
        // Authentication failed
        $response = array('success' => false, 'message' => 'Invalid username or password');
        echo json_encode($response);
        exit;
    }
} else {
    // Handle unauthorized access
    header('HTTP/1.1 401 Unauthorized');
    exit;
}
?>
