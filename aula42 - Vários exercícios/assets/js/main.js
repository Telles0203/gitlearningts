//Encontrar o maior número entre dois valores.
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
//Caso 1
function getBiggerNumber(numbers){
  return Math.max(...numbers);
}

let biggerNumber = getBiggerNumber(numbers);
console.log(biggerNumber);

r1 = random(min, max);
r2 = random(min, max);
console.log(r1, r2);

numbers = [r1, r2];

// Caso 2
function getBiggerNumber2(numbers) {
  let biggerNumber = numbers[0];  
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggerNumber) {
      biggerNumber = numbers[i]; 
    }
  }
  return biggerNumber;
}


biggerNumber = getBiggerNumber2(numbers);
console.log(getBiggerNumber2(numbers));
//-----------------------------------//
const valor = (x,y) => x>y?x:y;
console.log(valor(r1,r2));


