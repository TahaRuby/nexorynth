
/* =====================================
   NEXORYNTH — AUTHENTICATION SYSTEM
   Frontend Demo
===================================== */


/* 1. Password Visibility */

const passwordToggles = document.querySelectorAll(
    ".password-toggle, #togglePassword"
);

passwordToggles.forEach((button) => {

    button.addEventListener("click", () => {

        const targetId = button.dataset.target || "password";

        const input = document.getElementById(targetId);

        if (!input) return;

        const isPassword = input.type === "password";

        input.type = isPassword ? "text" : "password";

        button.textContent = isPassword ? "Hide" : "Show";

    });

});


/* 2. Login Form */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Please complete all fields.");
            return;
        }

        alert(
            "Login UI is working!\nBackend authentication is not connected yet."
        );

    });

}


/* 3. Register Form */

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const username = document.getElementById("username").value.trim();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value;

        const confirmPassword = document.getElementById(
            "confirmPassword"
        ).value;

        const terms = document.getElementById("terms").checked;


        // Username validation

        if (username.length < 3) {

            alert("Username must contain at least 3 characters.");

            return;

        }


        // Password validation

        if (password.length < 8) {

            alert("Password must contain at least 8 characters.");

            return;

        }


        // Confirm password validation

        if (password !== confirmPassword) {

            alert("Passwords do not match!");

            return;

        }


        // Terms validation

        if (!terms) {

            alert("Please accept the Terms & Conditions.");

            return;

        }


        // Demo response

        alert(
            "Registration form is working!\nBackend is not connected yet."
        );

    });

}
