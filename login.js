document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    function handleLogin(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === "" || password === "") {
            displayErrorMessage('Both fields are required');
            return;
        }

        if (username === "admin" && password === "password") {
            window.location.href = "indexTest.html";
        } else {
            displayErrorMessage('Invalid username or password');
        }
    }

    function displayErrorMessage(message) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
        errorMessage.textContent = message;

        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }

    loginForm.addEventListener('submit', handleLogin);
});
