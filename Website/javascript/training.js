addEventListener('load', (event) => {
    let username, password;

    if (sessionStorage.getItem('JWusername') && sessionStorage.getItem('JWpassword')) {
        username = sessionStorage.getItem('JWusername');
        password = sessionStorage.getItem('JWpassword');
    } else if (document.cookie.includes('JWusername') && document.cookie.includes('JWpassword')) {
        username = getCookie('JWusername');
        password = getCookie('JWpassword');
    }

    if (username && password) {

        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://jw1448.brighton.domains/jwTrainingAPI/training?username=" + username + "&password=" + password, requestOptions)
            .then(response => {
                if (response.status === 204) {
                    setProgress(100);
                    let noArticleMessage = document.createElement('h4');
                    noArticleMessage.textContent = "There is no work due.";
                    document.querySelector("#training_column1").appendChild(noArticleMessage);
                    return;
                } else if (response.status === 200) {
                    response.json().then(result => {
                        let half = Math.ceil(result.result.length / 2);
                        let firstHalf = result.result.slice(0, half);
                        let secondHalf = result.result.slice(half);
        
                        for (let i = 0; i < firstHalf.length; i++) {
                            let container = document.querySelector('#training_column1');
                            let card = createCard(firstHalf[i].articleId, firstHalf[i].title, firstHalf[i].description, firstHalf[i].due_date);
                            container.appendChild(card);
                        }
        
                        for (let i = 0; i < secondHalf.length; i++) {
                            let container = document.querySelector('#training_column2');
                            let card = createCard(secondHalf[i].articleId, secondHalf[i].title, secondHalf[i].description, secondHalf[i].due_date);
                            container.appendChild(card);
                        }
        
                        setProgress(Math.round(parseFloat(result.completed_percentage)));
                    })
                    .catch(error => console.log('error', error));
                }
            })
            

    }

    const progressBar = document.querySelector('#progress-bar .bar');
    const percentageLabel = document.querySelector('#progress-bar .percentage');

    function setProgress(percent) {
        progressBar.style.width = `${percent}%`;
        percentageLabel.textContent = `${percent}%`;
    }

    function createCard(articleId, title, description, due_date) {
        let card = document.createElement('div');
        card.classList.add('card');

        let cardContainer = document.createElement('div');
        cardContainer.classList.add('container');

        let cardTitle = document.createElement('h4');
        let titleLink = document.createElement('a');
        titleLink.href = 'https://jw1448.brighton.domains/jwTrainingAPI/article?articleId=' + articleId;
        titleLink.textContent = title;
        cardTitle.appendChild(titleLink);

        let cardDueDate = document.createElement('p');
        cardDueDate.classList.add('due-date');
        const dueDateObj = new Date(due_date);
        const month = dueDateObj.toLocaleString('default', {
            month: 'long'
        });
        const day = dueDateObj.getDate();
        const year = dueDateObj.getFullYear();
        cardDueDate.textContent = `Due date: ${month} ${day}, ${year}`;
        cardTitle.appendChild(cardDueDate);

        let cardDescription = document.createElement('p');
        cardDescription.textContent = description;

        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardDescription);
        card.appendChild(cardContainer);

        return card;
    }


})