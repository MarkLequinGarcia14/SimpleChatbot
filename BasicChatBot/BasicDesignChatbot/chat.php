<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userMessage = strtolower($_POST["message"]);
    $botResponse = getBotResponse($userMessage);
    echo $botResponse;
}

function getBotResponse($message) {
    switch ($message) {
        case 'hi':
            return "Hello! How can I assist you?";
        
        case 'hello':
            return "Hi there! How can I help?";

                case 'good morning':
            return "Hi there! How can I help?";
        
        default:
            return "I'm sorry, I didn't understand that. Can you please rephrase?";
    }
}
?>
