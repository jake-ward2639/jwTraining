addEventListener('load', (event) => {

    fetchData("");

    document.querySelector('#search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const keyword = document.getElementById("searchInput").value.trim();
        fetchData(keyword);
    });

    function fetchData(keyword, page = 1, pageSize = 10) {
        let username, password;

        if (sessionStorage.getItem('JWusername') && sessionStorage.getItem('JWpassword')) {
            username = sessionStorage.getItem('JWusername');
            password = sessionStorage.getItem('JWpassword');
        } else if (document.cookie.includes('JWusername') && document.cookie.includes('JWpassword')) {
            username = getCookie('JWusername');
            password = getCookie('JWpassword');
        }

        if (username && password) {
            fetch(`https://jw1448.brighton.domains/jwTrainingAPI/training/search?username=${username}&password=${password}&keyword=${keyword}&page=${page}&pageSize=${pageSize}`)
                .then(response => response.json())
                .then(result => {
                    let half = Math.ceil(result.result.length / 2);
                    let firstHalf = result.result.slice(0, half);
                    let secondHalf = result.result.slice(half);
                    let container1 = document.querySelector('#training_column1');
                    let container2 = document.querySelector('#training_column2');
                    container1.innerHTML = "";
                    container2.innerHTML = "";
                    document.querySelector('#pagination').innerHTML = "";

                    for (let i = 0; i < firstHalf.length; i++) {
                        let card = createCard(firstHalf[i].articleId, firstHalf[i].title, firstHalf[i].description, firstHalf[i].tags);
                        container1.appendChild(card);
                    }
                    for (let i = 0; i < secondHalf.length; i++) {
                        let card = createCard(secondHalf[i].articleId, secondHalf[i].title, secondHalf[i].description, secondHalf[i].tags);
                        container2.appendChild(card);
                    }

                    if (result.overallTotal > pageSize) {
                        let paginationContainer = document.querySelector('#pagination');
                        paginationContainer.innerHTML = "";
                        let numPages = Math.ceil(result.overallTotal / pageSize);
                        for (let i = 1; i <= numPages; i++) {
                            let paginationLink = document.createElement('a');
                            paginationLink.href = '#';
                            paginationLink.textContent = i;
                            paginationLink.classList.add('pagination-link');
                            if (i === page) {
                                paginationLink.classList.add('active');
                            } else {
                                paginationLink.addEventListener('click', function(event) {
                                    event.preventDefault();
                                    fetchData(keyword, i, pageSize);
                                });
                            }
                            paginationContainer.appendChild(paginationLink);
                        }
                    }
                })
                .catch(error => console.error(error));
        }
    }

    function createCard(articleId, title, description, tags) {
        let card = document.createElement('div');
        card.classList.add('card');

        let cardContainer = document.createElement('div');
        cardContainer.classList.add('container');

        let cardTitle = document.createElement('h4');
        let titleLink = document.createElement('a');
        titleLink.href = 'https://jw1448.brighton.domains/jwTrainingAPI/article?articleId=' + articleId;
        titleLink.textContent = title;
        cardTitle.appendChild(titleLink);

        let tagContainer = document.createElement('div');
        tagContainer.classList.add('tag-container');
        let tagList = tags.split(',');
        tagList.forEach(tag => {
            let tagEl = document.createElement('span');
            tagEl.textContent = tag.trim();
            tagEl.classList.add('tag');
            tagContainer.appendChild(tagEl);
        });
        cardTitle.appendChild(tagContainer);

        let cardDescription = document.createElement('p');
        cardDescription.textContent = description;

        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardDescription);
        card.appendChild(cardContainer);

        return card;
    }

});