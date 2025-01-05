"use strict";

// Custom error messages
const customErrorMessages = {
    "first-name": "Please enter your first name. It is required.",
    "last-name": "Please enter your last name. It is required.",
    email: "Please enter a valid email address.",
    "type-query": "Please select a query type. This field is required.",
    message: "Please enter at least 10 characters in your message.",
    subscribe: "You must consent to being contacted.",
};

// Helper function to toggle error messages
export function toggleError(element, message, show) {
    element.textContent = message || "";
    element.classList.toggle("active", show);
}

// Validate single input or textarea field
export function validateField(field, errorMessageId, showError = true) {
    const errorElement = document.getElementById(errorMessageId);

    // Check validity using field's built-in `validity` API
    if (!field.validity.valid) {
        if (showError) {
            const message = field.validity.valueMissing
                ? customErrorMessages[field.id] || "This field is required."
                : field.validity.tooShort
                ? `Your message must be at least ${field.minLength} characters.`
                : customErrorMessages[field.id] || "Invalid input.";

            toggleError(errorElement, message, true);
            field.classList.add("invalid");
        }
        field.classList.remove("valid");
        return false;
    } else {
        toggleError(errorElement, "", false);
        field.classList.remove("invalid");
        field.classList.add("valid");
        return true;
    }
}

// Validate query type (radio buttons)
export function validateQueryType(showError = true) {
    const selected = document.querySelector("input[name='type-query']:checked");
    const errorElement = document.getElementById("type-query-error");
    const fieldWrapper = document.getElementById("type-query");

    if (!selected) {
        if (showError) {
            toggleError(errorElement, customErrorMessages["type-query"], true);
            fieldWrapper.classList.add("invalid");
        }
        return false;
    } else {
        toggleError(errorElement, "", false);
        fieldWrapper.classList.remove("invalid");
        return true;
    }
}

// Validate checkbox
export function validateCheckbox(field, errorMessageId, showError = true) {
    const errorElement = document.getElementById(errorMessageId);
    if (!field.checked) {
        if (showError) {
            toggleError(errorElement, customErrorMessages[field.id], true);
            field.classList.add("invalid");
        }
        return false;
    } else {
        toggleError(errorElement, "", false);
        field.classList.remove("invalid");
        return true;
    }
}

// Generic validation function
export function validate(field, showError = true) {
    const errorMessageId = `${field.id}-error`;
    const errorElement = document.getElementById(errorMessageId);

    if (field.type === "checkbox") {
        return validateCheckbox(field, errorMessageId, showError);
    } else if (field.type === "radio") {
        return validateQueryType(showError);
    } else {
        return validateField(field, errorMessageId, showError);
    }
}
