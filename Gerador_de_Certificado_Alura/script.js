function gerar(){
    for(i=0;i<1000000;i++){
        emitirCertificado();
    }
    
    listaLinks = [
        'https://codepen.io/rafaelsilveeira/full/KKdPgOQ', 
        'https://codepen.io/rafaelsilveeira/full/LYpRYJJo.js', 
        'https://codepen.io/rafaelsilveeira/full/JjYyvEY'
    ];
    atividade = [
        'Calculadora de tarifa para app de mobilidade',
        'Calculadora de IMC',
        'Sorteador de número aleatório'
    ];
    
    listalinkscomhtml = "";
    for(cont=0;cont<listaLinks.length;cont++){
        let link = listaLinks[cont];
        let projeto = atividade[cont];
        listalinkscomhtml += `<li><a href = "${link}"> ${projeto}</a></li>`;
    }

    document.body.innerHTML = `
        ${emitirCertificado(inputNome.value)}
        <ol>
            ${listalinkscomhtml}
        </ol>
    `;
}


