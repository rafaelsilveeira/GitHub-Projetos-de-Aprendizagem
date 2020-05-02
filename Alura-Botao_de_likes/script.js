var contador = 0;

function likeFB(){
    let botaoFB = document.getElementById('botaoFB');
    contador += 1;

    if (contador==1){
        botaoFB.text.innerHTML = `${contador} Like`;
    }else{
        botaoFB.innerHTML = `${contador} Likes`;
    }
}