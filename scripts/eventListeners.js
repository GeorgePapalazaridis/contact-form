"use strict";
import { validate, validateQueryType } from "/scripts/validation.js";
import { showConfirmationMessage } from "/scripts/confirmation.js";

// Set up event listeners
export function setupEventListeners() {
    const form = document.getElementById("contactForm");

    // Attach blur or change event listeners to fields
    form.querySelectorAll("input, textarea").forEach((field) => {
        if (field.type === "checkbox") {
            field.addEventListener("change", () => validate(field));
        } else if (field.type !== "radio") {
            field.addEventListener("blur", () => validate(field));
        }
    });

    // Attach change event listener to radio buttons
    document.querySelectorAll("input[name='type-query']").forEach((radio) => {
        radio.addEventListener("change", validateQueryType);
    });

    // Attach submit event listener to form
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let isValid = true;
        form.querySelectorAll("input, textarea").forEach((field) => {
            if (!validate(field)) isValid = false;
        });

        if (isValid) {
            showConfirmationMessage();
            form.reset();
        }
    });
}
