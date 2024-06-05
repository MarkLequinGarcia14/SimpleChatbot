<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userMessage = $_POST["message"];
    $botResponse = getBotResponse($userMessage);
    echo $botResponse;
}

function getBotResponse($message) {
    // You can implement your chat bot logic here
    // For simplicity, let's just echo the received message
    return "Bot: " . $message;
}
?>
