// // Select the necessary elements
// const chatlogs = document.getElementById("chatlogs");
// const userInput = document.getElementById("userInput");

// // Function to add a new message to the chatlogs
// function addMessage(message, sender) {
//   const chatMessage = document.createElement("div");
//   chatMessage.classList.add(sender);
//   chatMessage.textContent = message;
//   chatlogs.appendChild(chatMessage);
// }

// // Function to handle user input
// function handleUserInput() {
//   const message = userInput.value;
//   addMessage(message, "user");

//   // Process the user message here and generate a response
//   const response = generateBotResponse(message);

//   addMessage(response, "bot");

//   // Clear the input field
//   userInput.value = "";
// }

// // Function to generate a response from the bot
// function generateBotResponse(message) {
//   // Your bot logic goes here
//   // You can use if statements, switch cases, or call APIs to generate appropriate responses

//   return "Thank you for contacting HAKIM AGENCIENS we are currently un avalailable. Please ttry again later";
// }

// // Event listener for user input
// userInput.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     handleUserInput();
//   }
// });

// const chatbox = document.getElementById("chatbox");
// const messenger = document.querySelector(".icons");

// messenger.addEventListener("click", () => {
//   if ((chatbox.style.display = "none")) {
//     chatbox.style.display = "block";
//   } else {
//     chatbox.style.display = "none";
//   }
// // });
