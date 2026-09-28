let users = [
    {
        fullName: "Ahmad Ali",
        email: "ahmad@gmail.com",
        password: "123456",
        address: "Amman"
    },
    {
        fullName: "Sara Mohammad",
        email: "sara@gmail.com",
        password: "sara123",
        address: "Irbid"
    },
    {
        fullName: "Omar Khaled",
        email: "omar@gmail.com",
        password: "omar123",
        address: "Zarqa"
    },
    {
        fullName: "Lina Ahmad",
        email: "lina@gmail.com",
        password: "lina123",
        address: "Aqaba"
    }
];

// HTML -Email- Elements 
const form = document.getElementById("register-form");
const emailInput = document.getElementById("email");
const message = document.getElementById("email-message");
const registerForm = document.getElementById("register-form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

form.addEventListener("submit" , function(e){
    e.preventDefault();

    const email = emailInput.value.trim();;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Empty Email
    if(email === ""){
        showMessage("Please enter your email", "error");
        return;
    }

    // Not Valid Email
    if(!emailPattern.test(email)){
        showMessage("Please enter a valid email address", "error");
        return;
    }

    // Valid Email
    showMessage("Email is valid!", "success");
});

// Validation Message Function
function showMessage(text , type){
    message.textContent = text;
    message.className = type;

    if(type === "error"){
        emailInput.classList.add("input-error");
    }
    else {
        emailInput.classList.remove("input-error");
    }
}


// Listen for form submission event
registerForm.addEventListener("submit", function(event) {
    // Prevent default form submission behavior (page reload)
    event.preventDefault();

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Check if password length is at least 6 characters
    if (password.length < 6) {
        showMessage("Password must be at least 6 characters long.", "error");
        return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        showMessage("Passwords do not match!", "error");
        return;
    }

    // If validation passes successfully
    showMessage("Password validated successfully!", "success");
});

// Helper function to display status messages
function showMessage(text, type) {
    message.textContent = text;
    message.className = ""; 
    message.classList.add(type); 
}


