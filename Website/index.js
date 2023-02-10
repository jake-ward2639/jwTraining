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

    if (getCookie('username') != "" && getCookie('username') != null){
        document.querySelector('#profile-card-username').textContent = getCookie('username');
    }

})