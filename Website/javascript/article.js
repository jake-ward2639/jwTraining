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
    
    quizForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const answers = [];
        for (let pair of formData.entries()) {
            answers.push(pair[1]);
        }
        const quizData = JSON.parse('<%- JSON.stringify(quiz_content) %>');
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
        } else {
            resultMessage += " - Failed";
        }
        quizResult.innerHTML = resultMessage;
    });

});