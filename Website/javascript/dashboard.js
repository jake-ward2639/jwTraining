addEventListener('load', (event) => {

    let username, password;

    if (sessionStorage.getItem('JWusername') && sessionStorage.getItem('JWpassword')) {
        username = sessionStorage.getItem('JWusername');
        password = sessionStorage.getItem('JWpassword');
    } else if (document.cookie.includes('JWusername') && document.cookie.includes('JWpassword')) {
        username = getCookie('JWusername');
        password = getCookie('JWpassword');
    }

    var urlencoded = new URLSearchParams();

    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch(`https://jw1448.brighton.domains/jwTrainingAPI/stats?username=${username}&password=${password}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        let closestArticleContainer = document.querySelector("#closest-article-container");

        let cardTitle = document.createElement('h4');
        let titleLink = document.createElement('a');
        titleLink.href = 'https://jw1448.brighton.domains/jwTrainingAPI/article?articleId='+result.closestArticle[0].articleId;
        titleLink.textContent = result.closestArticle[0].title;
        cardTitle.appendChild(titleLink);
        
        let cardDueDate = document.createElement('p');
        cardDueDate.classList.add('due-date');
        const dueDateObj = new Date(result.closestArticle[0].due_date);
        const month = dueDateObj.toLocaleString('default', { month: 'long' });
        const day = dueDateObj.getDate();
        const year = dueDateObj.getFullYear();
        cardDueDate.textContent = `Due date: ${month} ${day}, ${year}`;
        cardTitle.appendChild(cardDueDate);
        
        let cardDescription = document.createElement('p');
        cardDescription.textContent = result.closestArticle[0].description;
        
        closestArticleContainer.appendChild(cardTitle);
        closestArticleContainer.appendChild(cardDescription);

        let userStatsContainer = document.querySelector("#user-stats-container");
        let completedArticles = document.createElement('p');
        let missedArticles = document.createElement('p');
        let uncompletedArticles = document.createElement('p');
        completedArticles.textContent = "Total Completed Articles: "+result.completedArticles;
        missedArticles.textContent = "Total Missed Deadlines: "+result.missedArticles;
        uncompletedArticles.textContent = "Total Incomplete Assigned Articles: "+result.uncompletedArticles;

        userStatsContainer.appendChild(completedArticles);
        userStatsContainer.appendChild(missedArticles);
        userStatsContainer.appendChild(uncompletedArticles);
    })
    .catch(error => console.log('error', error));
})