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
let score = 0;
let viradas = 0;
let tempo = 0;
const timer = document.querySelector(".tempo");
const idIntervalo = setInterval(function(){
    tempo++;
    timer.innerHTML = `${tempo}`;
},1000);

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

    let idTipo = i;
    idCard.push(idTipo);
    idCard.push(idTipo);
    
    }
    
console.log(idCard);
idCard.sort(funcComparacao);
console.log(idCard);

const imagens = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif'];
imagens.sort(funcComparacao);

for(let i=0; i<nCartas; i++){

    const templateCarta = `<div class="card">
    <div class="back-face face tipo${idCard[i]}" onclick="flip(this)"><img src="./img/front.png"></div>
    <div class="front-face face"><img src="./img/${imagens[idCard[i]]}"></div>
    </div>`;
    const mesa = document.querySelector(".mesa");
        
    mesa.innerHTML += templateCarta;
    console.log(`adicionado ${i} carta`);
}

function funcComparacao(){
    return Math.random() - 0.5;
}

let parVirado = []

function flip(elemento){

    const dadosCard = elemento.classList;
    console.log("classes da carta: "+ dadosCard);
    const tipo = dadosCard[2];
    console.log("carta: "+ tipo )
    
    if(elemento.classList.contains("flipped")){
        
        console.log("escolha outra!");

    }else{
        
        const back =  elemento.parentNode.querySelectorAll("div")[0];
        const front =  elemento.parentNode.querySelectorAll("div")[1];

        back.classList.add("flipped");
        front.classList.add("flipped");

        parVirado.push(tipo);
        console.log(parVirado)
        
        paresCard();

        viradas++;
    }
    
}

function paresCard(){

    if(parVirado.length===2){
        let card1 = document.querySelector(`.${parVirado[0]}.flipped`);
        let card2 = document.querySelector(`.${parVirado[1]}.flipped`);

        let igual = parVirado[0]===parVirado[1];

        if(igual){
            console.log("CERTO!")
            let cardsIguais=document.querySelectorAll(`.${parVirado[0]}`);

            score++;

            if (score === nCartas/2){
                setTimeout(function(){
                const body = document.querySelector("body");
                const titulo = document.querySelector("h1");
                
                },500);
                setTimeout(function(){
                console.log("JOGO CONCLUIDO");
                clearInterval(idIntervalo);
                alert(`Você ganhou em ${viradas} jogadas!\nTempo de jogo: ${tempo} s`);
                const novo = prompt("Jogar novamente?");
                console.log(novo);
                if(novo==="sim"){
                    location = location;
                }else{
                    alert("Fim de jogo.");
                }
                },1500);
                

            }

        }else{
            console.log("ERRADO!")
            
            setTimeout(function() {
                
               
                
                card1.parentNode.querySelectorAll("div")[0].classList.remove("flipped");
                card1.parentNode.querySelectorAll("div")[1].classList.remove("flipped");

                card2.parentNode.querySelectorAll("div")[0].classList.remove("flipped");
                card2.parentNode.querySelectorAll("div")[1].classList.remove("flipped");
            
            },2000);
            
        }

        parVirado=[];
    }
}

function loro(){
    const loro = document.querySelector(".loro");
    loro.classList.toggle("carinho");
    setTimeout(function(){loro.classList.toggle("carinho");},1000);
}