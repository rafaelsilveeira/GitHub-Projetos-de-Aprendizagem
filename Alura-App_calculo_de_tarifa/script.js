//Função para padronizar moeda com vírgula
function padronizaMoeda(valor){
    return valor.toFixed(2).replace('.',',')
}

//Função para calcular valor da corrida
function calculoTarifa(km, tempo){
    let tarifa = 2+(km*1.4)+(tempo*0.26);
    return tarifa;
}

//Função "onclick" para calcular valor p/usuário
function calcular(){
    km = document.querySelector('#inputDistancia').value;
    tempo = document.querySelector('#inputTempo').value;

    valorcorrida = calculoTarifa(km, tempo);

    botaoCalcular.innerHTML = 'Total: R$ ' + padronizaMoeda(valorcorrida);
}