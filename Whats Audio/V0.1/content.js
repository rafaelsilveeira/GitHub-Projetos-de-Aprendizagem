const interval = setInterval(()=>{
    const header = document.querySelector("._1QUKR");
    if (header){
        clearInterval(interval);

        const button = document.createElement("button");
        button.innerHTML = "2x"
        button.setAttribute("id","speedControlButton");
        button.classList.add("scb_off");

        
        button.addEventListener("click",()=>{
            const audios = document.querySelectorAll("audio");
            if (button.className === "scb_off"){
                audios.forEach((audio)=>{
                    audio.playbackRate = 2;
                })
                document.querySelector("#speedControlButton").classList.replace('scb_off', 'scb_on');
            } else {
                audios.forEach((audio)=>{
                    audio.playbackRate = 1;
                })
                document.querySelector("#speedControlButton").classList.replace('scb_on', 'scb_off');
            }
            
        });

        header.appendChild(button); 
    }
},1000) 

