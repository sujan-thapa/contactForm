const validateForm = () => {


    // function validateForm() {
    // Get form elements
    const nameInput = document.getElementById("name");
    const addressInput = document.getElementById("address");
    const dateInput = document.getElementById("date");
    const emailInput = document.getElementById("email");

    // Error and success message containers
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    // Clear all the previous error messages
    errorMessage.textContent = "";
    successMessage.textContent = "";

    // Validation flag
    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
        // alert("Please enter your full name!");
        errorMessage.textContent += "Please enter your full name.\n";
        isValid = false;
    }

    // Validate address
    if (addressInput.value.trim() === "") {
        // alert("Please enter your address!");
        errorMessage.textContent += "Please enter your address.\n";
        isValid = false;
    }

    // Validate date
    if (!isValidDate(dateInput.value)) {
        // alert("Please enter a valid date!");
        errorMessage.textContent += "Please enter a valid date (DD-MM-YYYY).\n";
        isValid = false;
    }

    // Validate email
    if (!isValidEmail(emailInput.value)) {
        // alert("Please enter your email address!");
        errorMessage.textContent += "Please enter your email address.\n";

        isValid = false;
    }

    // If form is valid, display success message
    if (isValid) {
        alert("Form submitted successfully!");

        // successMessage.textContent = "Form submitted successfully!";

    }
   
    
    return isValid;   // Return the validation status
}

// function to validate date format

const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/; // Very basic check for date format
    return regex.test(dateString);
}

// function to validate email format (basic check)
const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Very basic check for email format
    return regex.test(email);
}
