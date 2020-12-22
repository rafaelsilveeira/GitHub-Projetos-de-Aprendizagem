const interval = setInterval(()=>{
    const header = document.querySelector("._1QUKR");
    if (header){
        clearInterval(interval);

        const button = document.createElement("button");
        button.innerHTML = "2x"
        button.setAttribute("id","speedControlButton");
        button.setAttribute('data-rate', 1);
        button.classList.add("scb_off");

        button.addEventListener("click",()=>{
            const audios = document.querySelectorAll("audio");
            if (button.className === "scb_off"){
                document.querySelector("#speedControlButton").classList.replace('scb_off', 'scb_on');
                document.querySelector("#speedControlButton").setAttribute('data-rate', 2);
            } else {
                document.querySelector("#speedControlButton").classList.replace('scb_on', 'scb_off');
                document.querySelector("#speedControlButton").setAttribute('data-rate', 1);
            }            
        });
        header.appendChild(button);      
        
        listenClick();
    }
},1000) 

function listenClick() {
    window.addEventListener('click', function(e){
        clickTarget = e.target.getAttribute('data-icon');
        if (clickTarget == 'audio-play') {
            rate = document.querySelector('#speedControlButton').getAttribute('data-rate');
            audios = document.querySelectorAll('audio');
            setAudiosRate(audios, rate);
        }
    });
}

function setAudiosRate(audios, rate) {
    for (audio of audios) {
        audio.playbackRate = rate;
        audio.defaultPlaybackRate = rate;
    }
}

