const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco:{
        rua: 'Avenida Brasil',
        numero: 320
    }
};
//console.log(pessoa);
/*Modo normal:
const nome = pessoa.nome;*/

//Atribuição via desestruturação
//const {nome} = pessoa;
/* console.log(nome);
const {
    endereco:{rua: r = 123456, numero}, endereco
    } = pessoa;
console.log(r,numero, endereco); */
const{nome, ...resto} = pessoa;
console.log(nome,resto);