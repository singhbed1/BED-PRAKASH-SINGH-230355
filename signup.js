document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.querySelector("form");

    registerForm.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const address = document.getElementById("address").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phonenumber").value.trim();
        const gender = document.getElementById("gender").value;
        const password = document.getElementById("password").value.trim();

        // Basic validation
        if (name === ""  address === ""  email === ""  phoneNumber === ""  gender === "" || password === "") 
            {
            alert("All fields are required.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Email format validation
        const emailPattern = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneNumber)) {
            alert("Please enter a valid 10-digit phone number.");
            event.preventDefault();
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            event.preventDefault();
            return;
        }
    });
});