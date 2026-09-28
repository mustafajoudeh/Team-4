// ============================================================
// USERS
// ============================================================

let users = JSON.parse(localStorage.getItem("users")) || [
  {
    fullName: "Ahmad Ali",
    email: "ahmad@gmail.com",
    password: "123456",
    address: "Amman",
  },
  {
    fullName: "Sara Mohammad",
    email: "sara@gmail.com",
    password: "sara123",
    address: "Irbid",
  },
  {
    fullName: "Omar Khaled",
    email: "omar@gmail.com",
    password: "omar123",
    address: "Zarqa",
  },
  {
    fullName: "Lina Ahmad",
    email: "lina@gmail.com",
    password: "lina123",
    address: "Aqaba",
  },
];

// Save users in localStorage
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

// ============================================================
// REGISTER
// ============================================================

const registerForm = document.getElementById("register-form");

if (registerForm) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const addressInput = document.getElementById("address");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  const emailMessage = document.getElementById("email-message");

  const message = document.getElementById("message");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const address = addressInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // ========================================================
    // Full Name Validation
    // ========================================================

    if (name === "") {
      message.textContent = "Please enter your full name";
      message.className = "error";
      return;
    }

    // ========================================================
    // Email Validation
    // ========================================================

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      emailMessage.textContent = "Please enter your email";
      emailMessage.className = "error";
      return;
    }

    if (!emailPattern.test(email)) {
      emailMessage.textContent = "Please enter a valid email address";

      emailMessage.className = "error";
      return;
    }

    // ========================================================
    // Check if Email Already Exists
    // ========================================================

    const existingUser = users.find(function (user) {
      return user.email === email;
    });

    if (existingUser) {
      emailMessage.textContent = "This email is already registered";

      emailMessage.className = "error";
      return;
    }

    // ========================================================
    // Address Validation
    // ========================================================

    if (address === "") {
      message.textContent = "Please enter your address";
      message.className = "error";
      return;
    }

    // ========================================================
    // Password Validation
    // ========================================================

    if (password === "") {
      message.textContent = "Please enter your password";
      message.className = "error";
      return;
    }

    if (password.length < 6) {
      message.textContent = "Password must be at least 6 characters long";

      message.className = "error";
      return;
    }

    // ========================================================
    // Confirm Password
    // ========================================================

    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match";

      message.className = "error";
      return;
    }

    // ========================================================
    // Create New User
    // ========================================================

    const newUser = {
      fullName: name,
      email: email,
      password: password,
      address: address,
    };

    // Add user to array
    users.push(newUser);

    // Save users
    saveUsers();

    // Success
    message.textContent = "Registration successful!";

    message.className = "success";

    // Clear form
    registerForm.reset();
  });
}

// ============================================================
// LOGIN
// ============================================================

const loginForm = document.getElementById("login-form");

if (loginForm) {
  const emailInput = document.getElementById("login-email");

  const passwordInput = document.getElementById("login-password");

  const message = document.getElementById("message");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // ========================================================
    // Email Validation
    // ========================================================

    if (email === "") {
      message.textContent = "Email is required";

      message.className = "error";
      return;
    }

    if (!emailInput.checkValidity()) {
      message.textContent = "Please enter a valid email";

      message.className = "error";
      return;
    }

    // ========================================================
    // Password Validation
    // ========================================================

    if (password === "") {
      message.textContent = "Password is required";

      message.className = "error";
      return;
    }

    if (password.length < 6) {
      message.textContent = "Password must be at least 6 characters";

      message.className = "error";
      return;
    }

    // ========================================================
    // Find User
    // ========================================================

    const user = users.find(function (user) {
      return user.email === email;
    });

    if (!user) {
      message.textContent = "User not found";

      message.className = "error";
      return;
    }

    // ========================================================
    // Check Password
    // ========================================================

    if (user.password !== password) {
      message.textContent = "Incorrect password";

      message.className = "error";
      return;
    }

    // ========================================================
    // Login Successful
    // ========================================================

    message.textContent = `Welcome back, ${user.fullName}!`;

    message.className = "success";

    // Save logged-in user
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  });
}
