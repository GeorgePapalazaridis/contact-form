document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // Clear previous error messages
    document
      .querySelectorAll(".error-message")
      .forEach((msg) => (msg.textContent = ""));

    // First Name Validation
    const firstName = document.getElementById("first-name");
    if (!firstName.validity.valid) {
      const firstNameError = document.getElementById("first-name-error");

      firstNameError.textContent =
        "Please enter a valid first name (at least 2 characters).";
      isValid = false;
    }

    // Last Name Validation
    const lastName = document.getElementById("last-name");

    if (!lastName.validity.valid) {
      const lastNameError = document.getElementById("last-name-error");

      lastNameError.textContent =
        "Please enter a valid last name (at least 2 characters).";
      isValid = false;
    }

    // Email Validation
    const email = document.getElementById("email");

    if (!email.validity.valid) {
      const emailError = document.getElementById("email-error");
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Query Type Validation (Radio Buttons)
    const queryType = document.querySelector(
      "input[name='type-query']:checked"
    );
    if (!queryType) {
      const typeQueryError = document.getElementById("type-query-error");
      typeQueryError.textContent = "Please select a query type.";
      isValid = false;
    }

    // Message Validation
    const message = document.getElementById("message");

    if (!message.validity.valid) {
      const messageError = document.getElementById("message-error");
      messageError.textContent =
        "Please enter a message (at least 10 characters).";
      isValid = false;
    }

    // Subscribe Validation (Checkbox)
    const subscribe = document.getElementById("subscribe");

    if (!subscribe.checked) {
      const subscribeError = document.getElementById("subscribe-error");

      subscribeError.textContent = "You must consent to be contacted.";
      isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
      alert("Form submitted successfully!");
      this.submit();
    }
  });
