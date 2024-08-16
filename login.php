<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "hotelbooking";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data
$username = $_POST['username'];
$password = $_POST['password'];

// Prepare and execute query
$sql = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

// Check if user exists and verify password
if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        // Successful login
        header("Location: indexTest.html");
        exit();
    } else {
        // Invalid password
        echo "Invalid username or password";
    }
} else {
    // Invalid username
    echo "Invalid username or password";
}

$stmt->close();
$conn->close();
?>
