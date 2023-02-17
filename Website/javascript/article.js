let player;

function onYouTubeIframeAPIReady() {
    let vidId = document.querySelector("#videoId").textContent;
    player = new YT.Player('player', {
        width: '100%',
        videoId: vidId,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {        
    if(event.data === 0) {            
        alert('alert');
    }
}