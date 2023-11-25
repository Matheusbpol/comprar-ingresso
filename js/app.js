
function comprar(){
    let quantidadeEscolhida = parseInt(document.getElementById('qtd').value);
    let tipoIngresso = document.getElementById('tipo-ingresso');
    if (tipoIngresso.value == 'pista'){
        comprarPista(quantidadeEscolhida);
        
    } else if(tipoIngresso.value == 'inferior'){
        comprarInferior(quantidadeEscolhida);
    } else{
        comprarSuperior(quantidadeEscolhida);
    }
}

function comprarPista (quantidadeEscolhida){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtdPista < quantidadeEscolhida){
        alert('Hey, você não pode comprar mais');
    } else{
        qtdPista = qtdPista - quantidadeEscolhida;
        document.getElementById('qtd-pista').textContent = qtdPista;
        document.getElementById('qtd').value = 0;
    }
}

function comprarInferior (quantidadeEscolhida){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtdInferior < quantidadeEscolhida){
        alert('Hey, você não pode comprar mais')
    } else{
        qtdInferior = qtdInferior - quantidadeEscolhida;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        document.getElementById('qtd').value = 0;
    }
}

function comprarSuperior (quantidadeEscolhida){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtdSuperior < quantidadeEscolhida){
        alert('Hey, você não pode comprar mais')
    } else{
        qtdSuperior = qtdSuperior - quantidadeEscolhida;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        document.getElementById('qtd').value = 0;
    }
}