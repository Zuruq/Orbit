// Function to validate email format
function isValidEmail(email) {
    // Basic email regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission until validation passes

    // Get form values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Error message elements
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Reset error messages
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Validate email
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate password
    if (password === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert("Login successful! (This is all we've done so far!!)");
        // Here you would typically send the data to the server
        // this.submit();
    }
})