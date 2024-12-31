// Helper function to validate a single field
function validateField(field, errorMessageId) {
    const errorElement = document.getElementById(errorMessageId);

    if (!field.validity.valid) {
        errorElement.textContent =
            field.validationMessage || "This field is required.";
        errorElement.classList.add("active");
        field.classList.add("invalid");
        field.classList.remove("valid");
        return false;
    } else {
        errorElement.textContent = "";
        errorElement.classList.remove("active");
        field.classList.remove("invalid");
        field.classList.add("valid");
        return true;
    }
}

// Function to validate query type (radio buttons)
function validateQueryType() {
    const selected = document.querySelector("input[name='type-query']:checked");
    const errorElement = document.getElementById("type-query-error");
    const fieldWrapper = document.getElementById("type-query");

    if (!selected) {
        errorElement.textContent =
            "Please select a query type. This field is required.";
        errorElement.classList.add("active");
        fieldWrapper.classList.add("invalid");
        return false;
    } else {
        errorElement.textContent = "";
        errorElement.classList.remove("active");
        fieldWrapper.classList.remove("invalid");
        return true;
    }
}

// Add event listeners for validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Add blur and input listeners for all fields except radio buttons
    form.querySelectorAll("input, textarea").forEach((field) => {
        if (field.type !== "radio") {
            const errorMessageId = `${field.id}-error`;

            field.addEventListener("blur", () =>
                validateField(field, errorMessageId)
            );
            field.addEventListener("input", () =>
                validateField(field, errorMessageId)
            );
        }
    });

    // Add change listeners for radio buttons
    document.querySelectorAll("input[name='type-query']").forEach((radio) => {
        radio.addEventListener("change", validateQueryType);
    });

    // Validate form on submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // Validate all fields except radio buttons
        form.querySelectorAll("input, textarea").forEach((field) => {
            if (field.type !== "radio") {
                const errorMessageId = `${field.id}-error`;
                if (!validateField(field, errorMessageId)) {
                    isValid = false;
                }
            }
        });

        // Validate query type
        if (!validateQueryType()) {
            isValid = false;
        }

        // If the form is valid, submit it
        if (isValid) {
            alert("Form submitted successfully!");
            this.submit();
        }
    });
});
