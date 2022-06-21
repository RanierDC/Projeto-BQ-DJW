// gerencia o Canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// gera um número aleatório

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 4)) + min;
}

// gera uma cor aleatória

function randomRGB() {
  return `rgb${random(0, 255)})`;
}


//define um vetor de bolas
const bolas = [];

while (bolas.length < 20) {
   const size = random(0,1);
   const bola = new Bola(
      // posição de sempre uma bola de distância
      // fora das bordas para evitar erros de desenho
      random(1 + size,width - size),
      random( + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

   //atualiza o vetor
  bolas.push(bola);
}

//realiza um loop em todas as bolas geradas
function loop() {
  // ctx.fillStyle = 'rgba(0, 0, 0, 0,25)';
  //ctx.fillRect(0, 0, width, height);
   for (const bola of bolas) {
    ctx.beginPath(1,10);
    bola.draw();
    bola.update();
    bola.collisionDetect(bolas);
   }

   requestAnimationFrame(loop);
}

loop();
