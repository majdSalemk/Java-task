const form = document.getElementById("registrationForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    
    // 1- Check if the name has just letters.
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    if (!isValidName(firstName) || !isValidName(lastName)) {
        alert("Invalid first or last name. Please use only letters.");
        return;
    }

    // 2- Determine the birth date input and check for it in the right way
    const birthdate = document.getElementById("birthdate").value;
    if (!isValidBirthdate(birthdate)) {
        alert("Invalid birth date format. Please use the correct format (YYYY-MM-DD).");
        return;
    }

    // 3- Check the email structure by regular expression and use Error handling if there's an error.
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;
    if (!isValidEmail(email) || email !== confirmEmail) {
        alert("Invalid email address or email confirmation mismatch.");
        return;
    }

    // 4- Check if the two emails are the same or not.

    // 5- Password validation
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (!isValidPassword(password) || password !== confirmPassword) {
        alert("Invalid password or password confirmation mismatch.");
        return;
    }

    // 6- Mobile number should be 10 numbers.
    const mobile = document.getElementById("mobile").value;
    if (!isValidMobile(mobile)) {
        alert("Invalid mobile number. Please use exactly 10 digits.");
        return;
    }

    // If all validations pass, the form can be submitted here.
    alert("Registration successful!");
    form.reset();
}

// Helper functions for validation
function isValidName(name) {
    return /^[A-Za-z]+$/.test(name);
}

function isValidBirthdate(date) {
    return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

function isValidEmail(email) {
    // Using a basic regular expression for email validation (not fully exhaustive)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
    // Using a regular expression for password validation (at least one uppercase, two digits, and one special character)
    return /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[\W_]).{8,32}$/.test(password);
}

function isValidMobile(mobile) {
    return /^\d{10}$/.test(mobile);
}
