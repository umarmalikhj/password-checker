document.addEventListener('DOMContentLoaded', () => {
    const checkPasswordBtn = document.getElementById('checkPassword');
    const introSection = document.querySelector('.intro');
    const cardSection = document.querySelector('.card');
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
    const checkPass = document.getElementById("checkPass");
    const passInputSection = document.querySelector('.inputSection');
    const resultSection = document.querySelector('.results');
    const passwordStr = document.getElementById("pasStr");
    const characters = document.getElementById("characters");
    const lowerCase = document.getElementById("lowerCase");
    const upperCase = document.getElementById("upperCase");
    const symbols = document.getElementById("symbols");
    const numbers = document.getElementById("numbers");

    checkPasswordBtn.addEventListener('click', () => {
        introSection.classList.add('hide');
        setTimeout(() => {
            introSection.style.display = 'none';
            cardSection.classList.add('show');
        }, 600);
    });

    eyeIcon.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        eyeIcon.classList.toggle("fa-eye");
        eyeIcon.classList.toggle("fa-eye-slash");
    });

    checkPass.addEventListener("click", () => {
        const password = document.getElementById("password").value;
        if (password === "") {
            alert("Space Cannot Be Empty");
        }
        else {
            passInputSection.classList.add('hide');
            setTimeout(() => {
                passInputSection.style.display = "none";
                resultSection.classList.add('show');
            }, 600);

            let length = password.length;

            resetChecklist();

            if (length >= 12) {
                characters.classList.add("show");
            }

            if (/[A-Z]/.test(password)) {
                upperCase.classList.add("show");
            }

            if (/[a-z]/.test(password)) {
                lowerCase.classList.add("show");
            }

            if (/[^a-zA-Z0-9]/.test(password)) {
                symbols.classList.add("show");
            }

            if (/[0-9]/.test(password)) {
                numbers.classList.add("show");
            }

            let score = 0;

            if (length >= 12) score++;
            if (/[A-Z]/.test(password)) score++;
            if (/[a-z]/.test(password)) score++;
            if (/[^a-zA-Z0-9]/.test(password)) score++;
            if (/[0-9]/.test(password)) score++;

            if (score <= 2) passwordStr.textContent = "Weak";
            else if (score === 3) passwordStr.textContent = "Medium";
            else if (score === 4) passwordStr.textContent = "Strong";
            else passwordStr.textContent = "Very Strong";

        }
    })


    function resetChecklist() {
        characters.classList.remove("show");
        lowerCase.classList.remove("show");
        upperCase.classList.remove("show");
        symbols.classList.remove("show");
        numbers.classList.remove("show");
    }
});
