function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "chat.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var chatOutput = document.getElementById("chat-output");
            chatOutput.innerHTML += "<p>User: " + userInput + "</p>";
            chatOutput.innerHTML += "<p>" + xhr.responseText + "</p>";
            document.getElementById("user-input").value = "";
        }
    };

    xhr.send("message=" + userInput);
}
