function rand(min,max){
   return Math.floor(Math.random() * (max + 1 - min) + min)
}

let amount = +prompt('Введите кол-во примеров')

for(let i = 0; i< amount ; i++) {
     let one = rand(1,10)
     let two = rand(1,10)
     let signal = rand(1,4)
     let answer = 0 ;
     if(signal == 1 ) {
      answer = one + two
      signal = '+'
     }else if (signal == 2 ) {
      answer = one - two
      signal = '-'
     }else if (signal == 3 ) {
      answer = one * two
      signal = '*'
     }else if (signal == 4 ) {
      answer = one / two
      signal = '/'
     }
     let primer = +prompt(one + signal +two + '=')
     console.log(answer == primer ? `Ваш ответ верный  ${primer}` : `Ваш ответ не верный ${primer} правильный ответ ${answer}`);
   }