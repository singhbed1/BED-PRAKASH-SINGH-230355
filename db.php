<?php
$servername = "localhost"; // Change if your database is on a different server
$username = "root"; // Change to your database username
$password = ""; // Change to your database password
$dbname = "hotel_booking";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>