let users = [
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

const email = document.getElementById("login-email");
const password = document.getElementById("login-password");

function Loginvalidation() {
  const emailValue = email.value;
  const passwordValue = password.value;

  // Email Validation
  if (emailValue === "") {
    console.log("Email is required");
    return false;
  }

  if (!email.checkValidity()) {
    console.log("Please enter a valid email");
    return false;
  }

  // Password Validation
  if (passwordValue === "") {
    console.log("Password is required");
    return false;
  }

  if (passwordValue.length < 6) {
    console.log("Password must be at least 6 characters");
    return false;
  }

  const user = users.find(function (user) {
    return user.email === emailValue;
  });

  if (!user) {
    console.log("User not found");
    return false;
  }

  // Check password
  if (user.password !== passwordValue) {
    console.log("Incorrect password");
    return false;
  }

  //console.log("Login successful");
  return true;
}

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const result = Loginvalidation();

  if (result) {
    console.log("Login successful");
  }
});
