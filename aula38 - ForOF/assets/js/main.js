const nome = 'Tester Testando - ';
const names = ['Pedro', 'Maria', 'José'];

for (let valor of names){
  console.log(valor)
}

names.forEach(function(valor, indice){
  console.log(valor,indice);
});

for (let i in nome){
  console.log(nome[i]);
}

for (let i=0;i<nome.length;i++){
  console.log(nome[i]);
}