const loginForm = document.getElementById('login-form');

const emailInput = document.getElementById('login-email');

const passwordInput = document.getElementById('login-password');

const messageBox = document.getElementById('login-message');


function showMessage(text) {

    messageBox.textContent = text;

    messageBox.style.color = "red";
    messageBox.style.backgroundColor = "#ffe6e6";
    messageBox.style.padding = "10px";
    messageBox.style.marginTop = "15px";
    messageBox.style.textAlign = "center";
    messageBox.style.borderRadius = "5px";
}


function handleLogin(event) {

    event.preventDefault();

    const email = emailInput.value.trim();

    const password = passwordInput.value;


    if (email === "") {

        showMessage("You should enter email");

        return;
    }


    if (password === "") {

        showMessage("You should enter password");

        return;
    }


    if (password.length < 6) {

        showMessage("The password should have at least 6 characters");

        return;
    }


    showMessage("Login successfully ✅");

}


loginForm.addEventListener('submit', handleLogin);