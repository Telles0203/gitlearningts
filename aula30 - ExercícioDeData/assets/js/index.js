/* //Caso 1

const data = new Date();

function getWeekDayText(weekDayNumber)
{
   let WeekDayText
   switch (weekDayNumber){
    case 0:
      WeekDayText = 'domingo';
      return WeekDayText;

     case 1:
      WeekDayText = 'segunda-feira';
      return WeekDayText;
     case 2:
      WeekDayText = 'terça-feira';
      return WeekDayText;
    
     case 3:
      WeekDayText = 'quarta-feira';
      return WeekDayText;
        
     case 4:
      WeekDayText = 'quinta-feira';
      return WeekDayText;

     case 5:
      WeekDayText = 'sexta-feira';
      return WeekDayText;

     case 6:
      WeekDayText = 'sábado';
      return WeekDayText;

    default:
      WeekDayText='';
      return WeekDayText;
   }
       
}


function getMonthText(numberMonth)
{
   let MonthText
   switch (numberMonth){
    case 0:
      MonthText = 'janeiro';
      return MonthText;

     case 1:
      MonthText = 'fevereiro';
      return MonthText;
     case 2:
      MonthText = 'março';
      return MonthText;
    
     case 3:
      MonthText = 'abril';
      return MonthText;
        
     case 4:
      MonthText = 'maio';
      return MonthText;

     case 5:
      MonthText = 'junho';
      return MonthText;

     case 6:
      MonthText = 'julho';
      return MonthText;

   case 7:
      MonthText = 'agosto';
      return MonthText;
         
   case 8:
      MonthText = 'setembro';
      return MonthText;
      
   case 9:
      MonthText = 'outubro';
      return MonthText;
    
   case 10:
      MonthText = 'novembro';
      return MonthText;

   case 11:
      MonthText = 'dezembro';
      return MonthText;

   default:
      MonthText ='';
      return MonthText;
   }
       
}


function leftZero(num){
   return num > 10 ? num : `0${num}`;
}

function criateDate(data){
   const weekDayNumber = data.getDay();
   const numberMonth = data.getMonth();
   const dayName = getWeekDayText(weekDayNumber);
   const monthName = getMonthText(numberMonth);
   
   return (`${dayName}, ${data.getDate()} de ${monthName} de ${data.getFullYear()} `+
   ` - ${leftZero(data.getHours())}:${leftZero(data.getMinutes())}`);
}
 */


//Caso 2
const h1 = document.querySelector('.container h1');
const data = new Date();



h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'full'});



//caso 3:


/* function getMonthText(numberMonth)
{
   const months = ['janeiro','fevereiro','março','abril','maio','junho',
   'julho','agosto','setembro','outubro','novembro','dezembro'];
   return months[numberMonth];
}

function getWeekDayText(weekDayNumber)
{
   const days = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
   return days[weekDayNumber];
       
}


function leftZero(num){
   return num > 10 ? num : `0${num}`;
}

function createDate(data){
   const weekDayNumber = data.getDay();
   const numberMonth = data.getMonth();
   const dayName = getWeekDayText(weekDayNumber);
   const monthName = getMonthText(numberMonth);
   console.log(weekDayNumber);
   return (`${dayName}, ${data.getDate()} de ${monthName} de ${data.getFullYear()} `+
   ` - ${leftZero(data.getHours())}:${leftZero(data.getMinutes())}`);
}
const h1 = document.querySelector('.container h1');
const data = new Data();
h1.innerHTML = createDate(data);
 */