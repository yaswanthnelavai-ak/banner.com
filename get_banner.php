<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$conn = new mysqli("localhost", "root", "", "banner_db");

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

$result = $conn->query("SELECT * FROM banners ORDER BY RAND() LIMIT 1");
$banner = $result->fetch_assoc();

echo json_encode($banner);
$conn->close();
?>
