"use strict";

// Show confirmation message
export function showConfirmationMessage() {
    const confirmationMessage = document.getElementById("confirmation-message");

    if (!confirmationMessage) {
        console.error("Confirmation message element not found!");
        return;
    }

    // Show the message
    confirmationMessage.classList.add("show");

    // Hide the message after 5 seconds
    setTimeout(() => {
        confirmationMessage.classList.remove("show");
    }, 5000); // 5000ms = 5 seconds
}
