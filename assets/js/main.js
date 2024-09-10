const pessoa = {
  nome: 'Tester',
  sobrenome: 'Testando',
  idade: 20
};

console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let chave in pessoa){
  console.log(`${chave}: ${pessoa[chave]}`);
}

// for (let chaves in pessoa){
//   console.log(chaves)
// }



// const frutas = ['Pera', 'Maça', 'Uva'];




// for (let fruta in frutas){
//   console.log(frutas[fruta]);
// }

// for (let i = 0; i<frutas.length; i++) {
//   console.log(frutas[i]);

// }