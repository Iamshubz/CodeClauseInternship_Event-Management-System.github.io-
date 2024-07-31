<?php
// Configuration
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'your_database_name';

// Create connection
$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
$email = $_POST['email'];
$phone_number = $_POST['phone_number'];
$event_type = $_POST['event_type'];
$event_date = $_POST['event_date'];
$event_location = $_POST['event_location'];
$additional_details = $_POST['additional_details'];
    // Validate input
    if (empty($name) || empty($email) || empty($phone_number) || empty($event_type) || empty($event_date) || empty($event_location)) {
        echo "Please fill in all required fields.";
    } else {
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO registrations (name, email, phone_number, event_type, event_date, event_location, additional_details) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssss", $name, $email, $phone_number, $event_type, $event_date, $event_location, $additional_details);
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            echo "Registration successful!";
        } else {
            echo "Error: " . $stmt->error;
        }
    }
}

// Close connection
$conn->close();
?>