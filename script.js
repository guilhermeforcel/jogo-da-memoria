function askNum(){
   const nCartas = parseInt(prompt(`Com quantas cartas você quer jogar?
(números pares, de 4 a 14)`));

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
    nCartas = askNum();
    valido = numValido(nCartas);
    console.log(valido)
}
    for(let i=0; i<nCartas; i++){
        
        console.log("valido")
        const mesa = document.querySelector(".mesa");
        
        mesa.innerHTML += `<div class="card"><img src="./img/front.png" alt=""></div>`;
        console.log(`adicionado ${i} carta`);
    }