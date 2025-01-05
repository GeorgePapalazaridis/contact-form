"use strict";

// Show confirmation message
export function showConfirmationMessage() {
    const confirmationMessage = document.getElementById("confirmation-message");

    if (!confirmationMessage) {
        console.error("Confirmation message element not found!");
        return;
    }

    confirmationMessage.classList.add("show");

    confirmationMessage.addEventListener("animationend", () => {
        confirmationMessage.classList.remove("show");
    });
}
