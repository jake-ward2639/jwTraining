addEventListener('load', (event) => {
    submitLogin = () => {    
        
        let username = document.querySelector('#login-username').value;
        let password = document.querySelector('#login-password').value;
        
        let requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("https://jw1448.brighton.domains/jwTrainingAPI/login?username="+username+"&password="+password, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setCookie('username', username, 1);
            setCookie('password', password, 1);
        })
        .catch(error => console.log('error', error));
    }    

    submitSignup = () => {
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
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setCookie('username', document.querySelector('#signup-username').value, 1);
            setCookie('password', document.querySelector('#signup-password').value, 1);
        })
        .catch(error => console.log('error', error));
    }
    
    function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
});