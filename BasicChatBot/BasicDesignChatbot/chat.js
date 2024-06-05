function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    var chatOutput = document.getElementById("chat-output");
    chatOutput.innerHTML += "<p class='user-message'>You: " + userInput + "</p>";

    // Make a request to the PHP file
    $.ajax({
        type: "POST",
        url: "chat.php",
        data: { message: userInput },
        success: function (response) {
            chatOutput.innerHTML += "<p class='bot-message'>" + response + "</p>";
            document.getElementById("user-input").value = "";
            
            // Scroll to the bottom of the chat output
            chatOutput.scrollTop = chatOutput.scrollHeight;
        },
        error: function () {
            chatOutput.innerHTML += "<p class='bot-message'>Bot: An error occurred. Please try again.</p>";
        }
    });
}
