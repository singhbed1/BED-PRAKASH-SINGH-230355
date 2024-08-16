<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel_booking";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Input validation and sanitization
$name = mysqli_real_escape_string($conn, $_POST['name']);
$address = mysqli_real_escape_string($conn, $_POST['address']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$phone_number = mysqli_real_escape_string($conn, $_POST['phone_number']);
$gender = mysqli_real_escape_string($conn, $_POST['gender']);
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);

// SQL query to insert user data into the database
$sql = "INSERT INTO users (name, address, email, phone_number, gender, password) VALUES ('$name', '$address', '$email', '$phone_number', '$gender', '$password')";

if ($conn->query($sql) === TRUE) {
    $_SESSION['name'] = $name;
    $_SESSION['email'] = $email;
    header("Location: indexTest.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

