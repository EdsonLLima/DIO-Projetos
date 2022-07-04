let order = [];
let clickedOrder = [];
let score = 0;
//0 - green
//1 - red
//2 - yellow
//3 - blue

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

//cria ordem aleatória
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];
};

for (let i in order) {
  let elementColor = createColorElement(order[i]);
  lightColor(elementColor, Number(i) + 1);
}

//seta o tempo que a animação vai ocorrer e acende a cor

let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  });
  setTimeout(() => {
    element.classList.remove("selected");
  });
};

//checa se os botoes claicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }
  if (checkOrder.length == order.length) {
    alert(`Pontuação ${score}\nVocê acertou" Inicando próximo nível`);
    nextLever();
  }
};

//função para o clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
};
