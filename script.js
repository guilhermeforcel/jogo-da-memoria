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

    let idTipo = "tipo"+i;
    idCard.push(idTipo);
    idCard.push(idTipo);
    
    }
    
console.log(idCard);
idCard.sort(funcComparacao);
console.log(idCard);

for(let i=0; i<nCartas; i++){

    const templateCarta = `<div class="card ${idCard[i]}" onclick="flip(this)">${idCard[i]}<img src="./img/front.png" alt=""></div>`;
    const mesa = document.querySelector(".mesa");
        
    mesa.innerHTML += templateCarta;
    console.log(`adicionado ${i} carta`);
}

function funcComparacao(){
    return Math.random() - 0.5;
}

let parVirado = []

function flip(elemento){ //VERIFICAR CASOS DE CLIQUE NO MESMA CARTA!!!!

    const dadosCard = elemento.classList;
    console.log("classes da carta: "+ dadosCard);
    const tipo = dadosCard[1];
    console.log("carta: "+ tipo )

    if(elemento.classList.contains("flipped")){
        
        console.log("escolha outra!");

    }else{

        elemento.classList.add("flipped");
        parVirado.push(tipo);
        console.log(parVirado)
        
        setTimeout(paresCard, 2000)
    }
    
    
}

let score = 0;

function paresCard(elemento){
    if(parVirado.length===2){
        let card1 = document.querySelector(`.${parVirado[0]}.flipped`);
        let card2 = document.querySelector(`.${parVirado[1]}.flipped`);

        let igual = parVirado[0]===parVirado[1];

        if(igual){
            alert("CERTO!")
            score++;
        }else{
            alert("ERRADO!")
            card1.classList.toggle("flipped");
            card2.classList.toggle("flipped");
            
        }

        parVirado=[];
    }
}