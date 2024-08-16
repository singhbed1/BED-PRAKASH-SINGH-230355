<?php
include 'db.php';

// Fetch hotels from database
$sql = "SELECT * FROM hotels";
$result = $conn->query($sql);

$hotels = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $hotels[] = $row;
    }
}

echo json_encode($hotels);

$conn->close();
?>
