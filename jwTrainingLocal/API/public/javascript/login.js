addEventListener('load', (event) => {
    
    cancelLogin = () => {
        window.history.back();
    }
    
    submitLogin = () => {

        let username = document.querySelector('#login-username').value;
        let password = document.querySelector('#login-password').value;

        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:3000/jwTrainingAPI/login?username=" + username + "&password=" + password, requestOptions)
            .then(response => {
                if (response.status == 200) {
                    if (document.querySelector('#login-rm-checkbox').checked == true) {
                        sessionStorage.setItem("JWusername", username);
                        sessionStorage.setItem("JWpassword", password);
                    } else {
                        sessionStorage.setItem("JWusername", username);
                        sessionStorage.setItem("JWpassword", password);
                    }
                    window.location.replace("index.html");
                } else if (response.status == 204) {
                    document.querySelector('#login-alert-content').textContent = 'Incorrect Username or Password';
                    document.querySelector('#login-alert').style.display = "block";
                }
                return response.json();
            })
            .then(result => {})
            .catch(error => console.log('error', error));
    }

    submitSignup = () => {

        const email = document.querySelector("#signup-email").value.trim();
        const username = document.querySelector("#signup-username").value.trim();
        const password = document.querySelector("#signup-password").value.trim();
        const repeatPassword = document.querySelector("#signup-password-repeat").value.trim();

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const usernameRegex = /^[a-zA-Z0-9_.-]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,31}$/;
        const validEmail = emailRegex.test(email);
        const validUsername = usernameRegex.test(username);
        const validLength = username.length > 5 && username.length < 32 && password.length > 5 && password.length < 32;
        const validPasswordsRepeat = password === repeatPassword;
        const validPasswords = passwordRegex.test(password);

        const alertElement = document.querySelector("#signup-alert");
        const alertContent = document.querySelector("#signup-alert-content");

        if (email === "" || username === "" || password === "" || repeatPassword === "") {
            alertContent.textContent = "Please fill in all fields.";
            alertElement.style.display = "block";
        } else if (!validEmail) {
            alertContent.textContent = "Invalid email.";
            alertElement.style.display = "block";
        } else if (!validUsername) {
            alertContent.textContent = "Invalid username. Username can only contain letters, numbers, dots, underscores, and hyphens.";
            alertElement.style.display = "block";
        } else if (!validLength) {
            alertContent.textContent = "Username and password must be between 6 and 31 characters long.";
            alertElement.style.display = "block";
        } else if (!validPasswordsRepeat) {
            alertContent.textContent = "Passwords do not match.";
            alertElement.style.display = "block";
        } else if (!validPasswords) {
            alertContent.textContent = "Passwords must be between 6 and 31 characters long, and must contain at least one uppercase letter, one lowercase letter, one number, and one special character. Only (!@#$%^&*()_+). are allowed as special characters.";
            alertElement.style.display = "block";
        } else {

            let submitSignupHeaders = new Headers();
            submitSignupHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            let urlencoded = new URLSearchParams();
            urlencoded.append("email", document.querySelector('#signup-email').value);
            urlencoded.append("username", document.querySelector('#signup-username').value);
            urlencoded.append("password", document.querySelector('#signup-password').value);

            let requestOptions = {
                method: 'POST',
                headers: submitSignupHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch("http://localhost:3000/jwTrainingAPI/signup", requestOptions)
                .then(response => {
                    if (response.status == 201) {
                        if (document.querySelector('#signup-rm-checkbox').checked == true) {
                            sessionStorage.setItem("JWusername", document.querySelector('#signup-username').value);
                            sessionStorage.setItem("JWpassword", document.querySelector('#signup-password').value);
                        } else {
                            sessionStorage.setItem("JWusername", document.querySelector('#signup-username').value);
                            sessionStorage.setItem("JWpassword", document.querySelector('#signup-password').value);
                        }
                        window.location.replace("index.html");
                    } else if (response.status == 400) {
                        response.json().then(res => {
                            alertContent.textContent = res.error;
                            alertElement.style.display = "block";
                        }).catch(error);
                    }
                    return response.json();
                })
                .then(result => {})
                .catch(error => {});
        }
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
});