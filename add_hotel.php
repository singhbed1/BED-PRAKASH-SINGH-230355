<?php
include 'db.php';

// Get POST data
$name = $_POST['name'];
$location = $_POST['location'];
$rating = $_POST['rating'];
$reviews = $_POST['reviews'];
$price = $_POST['price'];
$image_url = $_POST['image_url'];

// Insert new hotel
$sql = "INSERT INTO hotels (name, location, rating, reviews, price, image_url) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssdis", $name, $location, $rating, $reviews, $price, $image_url);

if ($stmt->execute()) {
    echo "New hotel added successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
