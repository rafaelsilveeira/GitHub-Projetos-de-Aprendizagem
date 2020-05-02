function gerar(){
    for(i=0;i<1000000;i++){
        emitirCertificado();
    }
    
    listaLinks = [
        '1 - https://caelum.github.io/quarentenadev/libCertificado.js', 
        '2 - https://caelum.github.io/quarentenadev/libCertificado.js', 
        '3 - https://caelum.github.io/quarentenadev/libCertificado.js'
    ];
    
    listalinkscomhtml = "";
    for(cont=0;cont<=listaLinks.length;cont++){
        link = listaLinks[cont];
        listalinkscomhtml += `<li>${link}</li>`;
    }

    document.body.innerHTML = `
        ${emitirCertificado(inputNome.value)}
        <ol>
            ${listalinkscomhtml}
        </ol>
    `;
}


