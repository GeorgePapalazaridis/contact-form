// Custom error messages
const customErrorMessages = {
    "first-name": "Please enter your first name. It is required.",
    "last-name": "Please enter your last name. It is required.",
    email: "Please enter a valid email address.",
    "type-query": "Please select a query type. This field is required.",
    message: "Please enter at least 10 characters in your message.",
    subscribe: "You must consent to being contacted.",
};

// Helper function to validate a single field
function validateField(field, errorMessageId, showError = true) {
    const errorElement = document.getElementById(errorMessageId);

    // Check validity using field's built-in `validity` API
    if (!field.validity.valid) {
        if (showError) {
            if (field.validity.valueMissing) {
                // Show "required" error message if field is empty
                errorElement.textContent =
                    customErrorMessages[field.id] || "This field is required.";
            } else if (field.validity.tooShort) {
                // Show specific "too short" error for the message field
                errorElement.textContent = `Your message must be at least ${field.minLength} characters.`;
            } else {
                // Fallback for other validation errors
                errorElement.textContent =
                    customErrorMessages[field.id] || "Invalid input.";
            }

            errorElement.classList.add("active");
            field.classList.add("invalid");
        }
        field.classList.remove("valid");
        return false;
    } else {
        // Clear errors if field is valid
        errorElement.textContent = "";
        errorElement.classList.remove("active");
        field.classList.remove("invalid");
        field.classList.add("valid");
        return true;
    }
}

// Function to validate query type (radio buttons)
function validateQueryType(showError = true) {
    const selected = document.querySelector("input[name='type-query']:checked");
    const errorElement = document.getElementById("type-query-error");
    const fieldWrapper = document.getElementById("type-query");

    if (!selected) {
        if (showError) {
            errorElement.textContent = customErrorMessages["type-query"];
            errorElement.classList.add("active");
            fieldWrapper.classList.add("invalid");
        }
        return false;
    } else {
        errorElement.textContent = "";
        errorElement.classList.remove("active");
        fieldWrapper.classList.remove("invalid");
        return true;
    }
}

// Validate checkbox
function validateCheckbox(field, errorMessageId, showError = true) {
    const errorElement = document.getElementById(errorMessageId);

    if (!field.checked) {
        if (showError) {
            errorElement.textContent = customErrorMessages[field.id];
            errorElement.classList.add("active");
            field.classList.add("invalid");
        }
        return false;
    } else {
        errorElement.textContent = "";
        errorElement.classList.remove("active");
        field.classList.remove("invalid");
        return true;
    }
}

function showConfirmationMessage() {
    const confirmationMessage = document.getElementById("confirmation-message");

    if (!confirmationMessage) {
        console.error("Confirmation message element not found!");
        return;
    }

    confirmationMessage.classList.add("show");

    const computedStyle = window.getComputedStyle(confirmationMessage);

    setTimeout(() => {
        confirmationMessage.classList.remove("show");
    }, 5000);
}

// Event listeners
function setupEventListeners() {
    const form = document.getElementById("contactForm");

    // Add blur listeners for all fields except radio buttons
    form.querySelectorAll("input, textarea").forEach((field) => {
        if (field.type !== "radio" && field.type !== "checkbox") {
            const errorMessageId = `${field.id}-error`;
            field.addEventListener(
                "blur",
                () => validateField(field, errorMessageId) // Validate field on blur
            );
        }

        if (field.type === "checkbox") {
            const errorMessageId = `${field.id}-error`;
            field.addEventListener("change", () =>
                validateCheckbox(field, errorMessageId)
            );
        }
    });

    // Add change listeners for radio buttons
    document.querySelectorAll("input[name='type-query']").forEach((radio) => {
        radio.addEventListener("change", validateQueryType); // Validate query type on change
    });

    // Validate form on submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // Validate all fields except radio buttons on submit
        form.querySelectorAll("input, textarea").forEach((field) => {
            const errorMessageId = `${field.id}-error`;

            if (field.type === "radio") return;
            if (field.type === "checkbox") {
                if (!validateCheckbox(field, errorMessageId)) isValid = false;
            } else if (!validateField(field, errorMessageId)) {
                isValid = false;
            }
        });

        // Validate query type on submit
        if (!validateQueryType()) isValid = false;

        // If the form is valid, submit it
        if (isValid) {
            // Simulate submission success
            showConfirmationMessage();
            form.reset(); // Reset the form fields
        }
    });
}

// Initialize event listeners on DOMContentLoaded
document.addEventListener("DOMContentLoaded", setupEventListeners);
