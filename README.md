# Contact Form Project

Welcome to the **Contact Form Project**! This project showcases a modern, responsive, and accessible **Contact Form** with built-in validation. Styled using **SCSS** and enhanced with vanilla JavaScript, it features client-side validation, a responsive layout, and a live demo hosted on GitHub Pages.

## 🚀 Features

-   **Form Validation**:
    -   Real-time validation for required fields with custom error messages.
-   **Responsive Design**:
    -   Fully responsive layout for mobile, tablet, and desktop views.
-   **User Feedback**:
    -   Confirmation message displayed after successful form submission.
-   **Accessible Design**:
    -   Includes semantic HTML, ARIA attributes, and accessible labels.
-   **SCSS Styling**:
    -   Modular and reusable SCSS structure for efficient styling.

## 🌐 Live Demo

Check out the live site here: [Contact Form on GitHub Pages](https://geopapa.github.io/contact-form/)

## 🎨 Screenshots

![Empty Form State: Default view of the form when no fields are filled](https://github.com/user-attachments/assets/e21dab2a-6500-420e-808a-d9a4db770ac6)

![Filled Form State: The form after the user has completed the inputs](https://github.com/user-attachments/assets/4d2b2bef-1b22-4c1d-9c18-d74c27862374)

![Mobile Form View: Responsive layout of the form on smaller screens](https://github.com/user-attachments/assets/a1225da0-2982-4a64-aae6-7e95a238ba2c)

![Error Validation Example: Real-time validation errors displayed when fields are left blank](https://github.com/user-attachments/assets/b6a4d56b-836d-4a0a-a02f-b3da502a9afa)

![Success Confirmation Message: Confirmation message shown after successful submission](https://github.com/user-attachments/assets/a6417701-ab3e-4e5a-87bd-215e891edfc7)

## 💻 Technologies Used

-   **HTML5** for semantic and accessible markup.
-   **SCSS** for modular and responsive styling.
-   **Vanilla JavaScript** for dynamic functionality and validation.
-   **Material Icons** for icons in the confirmation message.

## 📂 File Structure

```plaintext
contact-form/
├── css/
│   ├── _button.scss                # Button styles
│   ├── _checkbox.scss              # Checkbox styles
│   ├── _confirmation-message.scss  # Styles for the confirmation message
│   ├── _form.scss                  # General form styles
│   ├── _responsiveness.scss        # Media queries for responsive design
│   ├── _validation.scss            # Error message styling
│   ├── _variables.scss             # SCSS variables for consistent theming
│   ├── normalize.scss              # Cross-browser normalization
│   └── styles.scss                 # Main entry point importing all partials
├── images/
│   ├── background-image.jpg        # Background image for the form
│   ├── icon-checkbox-check.svg     # Checkbox icon
│   ├── icon-radio-selected.svg     # Radio button selected icon
│   ├── icon-success-check.svg      # Success icon
├── scripts/
│   ├── validation.js               # Handles validation logic
│   ├── confirmation.js             # Manages confirmation message
│   ├── eventListeners.js           # Sets up event listeners
│   └── main.js                     # Main entry point
├── index.html                      # Main HTML file
├── .gitignore                      # Files and directories to ignore in Git
├── LICENSE                         # Project license
└── README.md                       # Project documentation
```

## ⚙️ Installation

To view or modify this project locally:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/geopapa/contact-form.git
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd contact-form
    ```

3. **Install Dependencies** (if any):
    - Install `sass` globally to compile SCSS:

    ```bash
    npm install -g sass
    ```

4. **Compile SCSS**:
    Watch SCSS files and compile them into CSS:

    ```bash
    sass --watch css/styles.scss css/styles.css
    ```

5. **Open the Project in a Browser**:
    Use a local server or directly open `index.html` in your browser.

## 🛠️ How It Works

1. **Real-Time Validation**:
    - Validates input fields on blur.
    - Displays custom error messages for invalid fields.
2. **Form Submission**:
    - On successful validation, a confirmation message appears for 5 seconds.
3. **Responsive Design**:
    - SCSS media queries ensure the form adapts to various screen sizes.

## 📈 Future Enhancements

-   **Backend Integration**:
    -   Connect the form to a server to handle submissions.
-   **Email Notifications**:
    -   Automatically send email notifications on form submission.
-   **Improved Accessibility**:
    -   Enhance ARIA attributes for better screen reader support.
-   **Automated Testing**:
    -   Add tests for validation logic and responsive design.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Acknowledgments

-   [Google Fonts](https://fonts.google.com/) for Material Icons.
-   [Normalize.css](https://necolas.github.io/normalize.css/) for cross-browser consistency.
-   [Frontend Mentor](https://www.frontendmentor.io/) for inspiring this project.

---

Thank you for exploring this project! If you have any feedback or suggestions, feel free to contribute or reach out.
