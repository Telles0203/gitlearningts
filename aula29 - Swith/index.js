const data = new Date();
const diaSemana = data.getDay();
//console.log(diaSemana);

let diaSemanaTexto


switch (diaSemana){
    case 0:
        diaSemanaTexto = 'domingo';
        break;

     case 1:
        diaSemanaTexto = 'segunda-feira';
        break;
     case 2:
        diaSemanaTexto = 'terça-feira';
        break;
    
     case 3:
        diaSemanaTexto = 'quarta-feira';
        break;
        
     case 4:
        diaSemanaTexto = 'quinta-feira';
        break;

     case 5:
        diaSemanaTexto = 'sexta-feira';
        break;

     case 6:
        diaSemanaTexto = 'sábado';
        break;

    default:
        diaSemana ='';
        break;

}
// if(diaSemana === 0){
//     diaSemanaTexto = 'Domingo';
// }
// if(diaSemana === 1){
//     diaSemanaTexto = 'segunda-feira';
// }
// if(diaSemana === 2){
//     diaSemanaTexto = 'terça-feira';
// }
// if(diaSemana === 3){
//     diaSemanaTexto = 'quarta-feira';
// }
// if(diaSemana === 4){
//     diaSemanaTexto = 'quinta-feira';
// }
// if(diaSemana === 5){
//     diaSemanaTexto = 'sexta-feira';
// }
// if(diaSemana === 6){
//     diaSemanaTexto = 'sábado';
// };

console.log(diaSemanaTexto);