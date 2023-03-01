addEventListener('load', (event) => {
    if ((sessionStorage.getItem('JWusername') && sessionStorage.getItem('JWpassword')) || 
    (document.cookie.includes('JWusername') && document.cookie.includes('JWpassword'))) {
        
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch("https://jw1448.brighton.domains/jwTrainingAPI/training?username="+getCookie('JWusername')+"&password="+getCookie('JWpassword'), requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
})