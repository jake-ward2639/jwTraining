addEventListener('load', (event) => {
    if ((sessionStorage.getItem('JWusername') && sessionStorage.getItem('JWpassword')) || 
    (document.cookie.includes('JWusername') && document.cookie.includes('JWpassword'))) {
        
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch("https://jw1448.brighton.domains/jwTrainingAPI/training?username="+getCookie('JWusername')+"&password="+getCookie('JWpassword'), requestOptions)
            .then(response => response.json())
            .then(result => {
                let half = Math.ceil(result.result.length / 2);
                let firstHalf = result.result.slice(0, half);
                let secondHalf = result.result.slice(half);

                for (let i = 0; i < firstHalf.length; i++) {
                    let container = document.querySelector('#training_column1');
                    let card = createCard(firstHalf[i].title, firstHalf[i].description);
                    container.appendChild(card);
                  }
                  
                  for (let i = 0; i < secondHalf.length; i++) {
                    let container = document.querySelector('#training_column2');
                    let card = createCard(secondHalf[i].title, secondHalf[i].description);
                    container.appendChild(card);
                  }
            })
            .catch(error => console.log('error', error));

    }

    function createCard(title, description) {
        let card = document.createElement('div');
        card.classList.add('card');
      
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('container');
      
        let cardTitle = document.createElement('h4');
        cardTitle.textContent = title;
      
        let cardDescription = document.createElement('p');
        cardDescription.textContent = description;
      
        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardDescription);
        card.appendChild(cardContainer);
      
        return card;
    }

})