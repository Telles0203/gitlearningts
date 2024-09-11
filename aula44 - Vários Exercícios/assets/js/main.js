//Escreva uma função que recebe um número e retorne o seguinte:
// //3 = Fizz; //5 = Buzz; divisível por 3 e 5 = FizzBuzz ou retorna o número//
//Checa se o número é realmente o número.
//Use os números de 0 a 100
const userInput = prompt("Por favor, insira um número de 0 a 100:");
const valor = Number(userInput);
console.log(valor);



const inicialNumber = 0;
const endNumber = 100;

const isSmaller = (valor) => valor>=inicialNumber? true:console.log('Este número é menor que 100');
const isSmallerCheck = isSmaller(valor);

const isBigger = (valor) => valor<=endNumber? true:console.log('Este número é maior que 100');
const isBiggerCheck =  isBigger(valor);

const isNaN = (valor) => typeof valor==='number'? true:console.log('Este não é um número');
const isNaNCheck = isNaN(valor);


const numberCheck = (valor) => (isSmallerCheck && isBiggerCheck && isNaNCheck)?true:false;

const isNumber = numberCheck(valor);
console.log(isNumber);
const checkTest = printExercise(valor, isNumber);



function printExercise(valor, isNumber){
  if (isNumber){
    if (valor % 3 === 0 && valor % 5 === 0) {
        console.log(`${valor} = FizzBuzz`);
      }
    else if (valor % 3 === 0) {
        console.log(`${valor} = Fizz`);
      }
    else if (valor % 5 === 0) {
        console.log(`${valor} = Buzz`);
      }
    else{
        console.log(`${valor}`);
      };
  }
  else{
    console.log('Não é um número');
  };
};



///////////////////////////
function fizzBuzz(numero){
  if (typeof numero !== 'number') return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  return numero;
}
for (let i = 0;i<=100;i++){
  console.log(i,fizzBuzz(i))
}

