let nCartas = parseInt(prompt("Com quantas cartas você quer jogar?"));

while (nCartas > 0){

    const mesa = document.querySelector(".mesa");

    mesa.innerHTML += `<div class="card"><img src="./img/front.png" alt=""></div>`;

    nCartas--;
}