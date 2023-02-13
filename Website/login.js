addEventListener('load', (event) => {
    submitLogin = () => {    
        
        let username = document.querySelector('#login-username').value;
        let password = document.querySelector('#login-password').value;
        
        let requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("https://jw1448.brighton.domains/jwTrainingAPI/login?username="+username+"&password="+password, requestOptions)
        .then(response => {
            if (response.status == 200){
                setCookie('username', username, 1);
                setCookie('password', password, 1);
                window.location.replace("https://jw1448.brighton.domains/jwTraining");
            } else if (response.status == 204){
                document.querySelector('#login-alert-content').textContent = 'Incorrect Username or Password';
                document.querySelector('#login-alert').style.display = "block";
            }
            return response.json();
        })
        .then(result => {})
        .catch(error => console.log('error', error));
    }    

    submitSignup = () => {

        if (document.querySelector('#signup-password').value == document.querySelector('#signup-password-repeat').value){

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

            fetch("https://jw1448.brighton.domains/jwTrainingAPI/signup", requestOptions)
            .then(response => {
                if (response.status == 200){
                    setCookie('username', document.querySelector('#signup-username').value, 1);
                    setCookie('password', document.querySelector('#signup-password').value, 1);
                    window.location.replace("https://jw1448.brighton.domains/jwTraining");
                } else if (response.status == 400){
                    response.json().then(res => {
                        document.querySelector('#signup-alert-content').textContent = res.error;
                        document.querySelector('#signup-alert').style.display = "block";
                    }).catch(error);
                }
                return response.json();
            })
            .then(result => {})
            .catch(error => {});

        } else {
            document.querySelector('#signup-alert-content').textContent = 'Input passwords do not match';
            document.querySelector('#signup-alert').style.display = "block";
        }

    }
    
    function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
});