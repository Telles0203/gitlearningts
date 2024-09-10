const pontuiacaoUsuario = 1000;
const nivelUsuario = pontuiacaoUsuario >=1000 ? 'Usuario VIP' : 'Usuário Normal';
//console.log(nivelUsuario)

// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);