let player;

function onYouTubeIframeAPIReady() {
    let vidId = document.querySelector("#videoId").textContent;
    if (vidId.length != 0){
        document.querySelector("#player-container").classList.add("player-container");
        player = new YT.Player('player', {
            width: '100%',
            videoId: vidId,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {        
    if(event.data === 0) {            
        alert('alert');
    }
}

addEventListener('load', (event) => {

    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');
    let username, password;
    if (sessionStorage.getItem('JWusername') && sessionStorage.getItem('JWpassword')) {
        username = sessionStorage.getItem('JWusername');
        password = sessionStorage.getItem('JWpassword');
    }
    else if (document.cookie.includes('JWusername') && document.cookie.includes('JWpassword')) {
        username = getCookie('JWusername');
        password = getCookie('JWpassword');
    }
    
    quizForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const answers = [];
        for (let pair of formData.entries()) {
            answers.push(pair[1]);
        }
        const quizData = window.quizContent;
        let correctCount = 0;
        quizData.forEach((question, index) => {
            if (question.correctAnswerIndex == answers[index]) {
                correctCount++;
            }
        });
        const score = Math.round(correctCount / quizData.length * 100);
        let resultMessage = `You scored ${score}%`;
        if (score >= 70) {
            resultMessage += " - Passed";

            var submitQuizHeaders = new Headers();
            submitQuizHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
            var urlencoded = new URLSearchParams();
            urlencoded.append("username", username);
            urlencoded.append("password", password);
            urlencoded.append("articleId", articleId);
        
            var requestOptions = {
                method: 'POST',
                headers: submitQuizHeaders,
                body: urlencoded,
                redirect: 'follow'
            };
        
            fetch("https://jw1448.brighton.domains/jwTrainingAPI/article/submit", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        } else {
            resultMessage += " - Failed";
        }
        quizResult.innerHTML = resultMessage;
    });

});