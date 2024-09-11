//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se ela estiver no modo paisagem.

const min = 0;
const max = 9;
function random(min, max){
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
let r1 = random(min, max);
let r2 = random(min, max);
console.log(r1, r2);
let numbers = [r1, r2];
//
const ePaisagem = (altura,largura) => largura>=altura;
console.log(ePaisagem(r1,r2));
