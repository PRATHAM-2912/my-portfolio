
// ================= 1. WELCOME MESSAGE =================

const welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", function () {

    alert("Welcome to my portfolio! Thank you for visiting.");

});


// ================= 2. DARK MODE =================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeToggle.innerHTML =
            '<i class="bi bi-sun-fill"></i> Light Mode';

    } else {

        themeToggle.innerHTML =
            '<i class="bi bi-moon-stars-fill"></i> Dark Mode';

    }

});


// ================= 3. CURRENT DATE =================

const currentDate = document.getElementById("currentDate");

const today = new Date();

currentDate.textContent = today.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric"
});


// ================= 4. CHARACTER COUNTER =================

const message = document.getElementById("message");

const charCount = document.getElementById("charCount");

message.addEventListener("input", function () {

    charCount.textContent = message.value.length;

});


// ================= 5. FORM VALIDATION =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const messageValue = message.value.trim();


    // Get error elements
    const nameError = document.getElementById("nameError");

    const emailError = document.getElementById("emailError");

    const messageError = document.getElementById("messageError");

    const formSuccess = document.getElementById("formSuccess");


    // Clear previous messages
    nameError.textContent = "";

    emailError.textContent = "";

    messageError.textContent = "";

    formSuccess.textContent = "";


    let isValid = true;


    // Name validation
    if (name === "") {

        nameError.textContent = "Please enter your name.";

        isValid = false;

    }


    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Please enter your email.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent = "Please enter a valid email address.";

        isValid = false;

    }


    // Message validation
    if (messageValue === "") {

        messageError.textContent = "Please enter your message.";

        isValid = false;

    } else if (messageValue.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        isValid = false;

    }


    // Form submission result
    if (isValid) {

        formSuccess.textContent =
            "Your form has been validated successfully!";

        contactForm.reset();

        charCount.textContent = "0";

    }

});
