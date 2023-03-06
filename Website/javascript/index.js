addEventListener('load', (event) => {

    mobFriNav = () => {
        let x = document.getElementById("topNav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    setCookie = (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    getCookie = (cname) => {
        let name = cname + "=";
        let spli = document.cookie.split(';');
        for(var j = 0; j < spli.length; j++) {
            let char = spli[j];
            while (char.charAt(0) == ' ') {
                char = char.substring(1);
            }
            if (char.indexOf(name) == 0) {
                return char.substring(name.length, char.length);
            }
        }
        return "";
    }

    if (sessionStorage.getItem("JWusername") != "" && sessionStorage.getItem("JWusername") != null){
        document.querySelector('#profile-card-username').textContent = sessionStorage.getItem("JWusername");
    } else if (getCookie('JWusername') != "" && getCookie('JWusername') != null){
        document.querySelector('#profile-card-username').textContent = getCookie('JWusername');
    } else {
        window.location.replace("https://jw1448.brighton.domains/jwTraining/login.html");
    }

    if (document.querySelector('#nullJobTitleMessage')) {
        
        let username, password;

        if (sessionStorage.getItem('JWusername') && sessionStorage.getItem('JWpassword')) {
            username = sessionStorage.getItem('JWusername');
            password = sessionStorage.getItem('JWpassword');
        }
        else if (document.cookie.includes('JWusername') && document.cookie.includes('JWpassword')) {
            username = getCookie('JWusername');
            password = getCookie('JWpassword');
        }

        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("https://jw1448.brighton.domains/jwTrainingAPI/login?username="+username+"&password="+password, requestOptions)
          .then(response => response.json())
          .then(result => {
              if(result.job_title == "unassigned"){
                  document.querySelector('#nullJobTitleMessage').style.display = "block";
              }
          })
          .catch(error => console.log('error', error));
        
    }
})