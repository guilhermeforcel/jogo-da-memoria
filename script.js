function askNum(erro=""){
   const nCartas = parseInt(prompt(`${erro}Com quantas cartas você quer jogar?
(4 a 14 cartas em par)`));

    return nCartas;
}

function numValido(nCartas){

    let par = nCartas % 2 === 0;
    let intervalo = nCartas >= 4 && nCartas <= 14;
    const valido = par && intervalo;
    return valido;
}

let nCartas = askNum();
let valido = numValido(nCartas);

while(!valido){
    const erro = `Número de cartas inválido!

>> Digite um número par, de 4 a 14

`
    nCartas = askNum(erro);
    valido = numValido(nCartas);
    console.log(valido)
}  

const idCard = [];

for(let i=0; i<nCartas/2; i++){

    idCard.push(i);
    idCard.push(i);
    
    }
    
console.log(idCard);
idCard.sort(funcComparacao);
console.log(idCard);

for(let i=0; i<nCartas; i++){

    const templateCarta = `<div class="card tipo${idCard[i]}" onclick="flip(this)"><img src="./img/front.png" alt=""></div>`;
    const mesa = document.querySelector(".mesa");
        
    mesa.innerHTML += templateCarta;
    console.log(`adicionado ${i} carta`);
}

function funcComparacao(){
    return Math.random() - 0.5;
}

function flip(elemento){

    elemento.classList.add("flipped");
    
}