var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score=0;
var userName = readlineSync.question("What's your name? ");
console.log(chalk.blue("Welcome " + userName));
console.log(chalk.magenta("Let's see how much you know about your favorite band BTS! "));


var mcqList=[
  {
    array : ['We are Bulletproof', 'Map of the Soul', '2 cool 4 skool', 'Skool love affair'],
    question : 'What was the name of their debut album? ',
    answer : '2 Cool 4 Skool'
  },
  {
    array : ['V', 'RM', 'Suga', 'Jimin'],
    question : 'Who is the singer of Sweet Night in Itaewon Class? ',
    answer : 'V'
  },
  {
    array : ['Jimin', 'Jungkook', 'Jin', 'Suga'],
    question : "Who's dog is named Gureum? ",
    answer : 'Jungkook'
  },
  {
    array : ['Beyong the scene', 'Behind the scenes', 'Bangtan Boys', 'Bulletproof Boys'],
    question : 'What is the original full form of BTS? ',
    answer : 'Bangtan Boys'
  },
  {
    array : ['July 4', 'May 29', 'Jun 9', 'July 9'],
    question : "Which day is celebrated as ARMY'S Birthday? ",
    answer : 'July 9'
  },
  {
    array : ['Hwarang', 'Weightlifting fairy Kim Bok Joo', 'Tempted', 'Boys over Flowers'],
    question : 'V starred in which kdrama? ',
    answer : 'Hwarang'
  },
];


function quizMcq(listOfAnswers,question,answer){
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  if(listOfAnswers[userAnswer] === answer){
    console.log(chalk.green('You are Right.'));
    score = score + 1;
  } 
  else{
    console.log(chalk.red('You are Wrong.'));
  }

  console.log(chalk.cyan('Current Score is: ',score));
}

for(var i = 0;i < mcqList.length; i++){
  quizMcq(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
  console.log('_________________________________');
}

console.log(chalk.magenta('Congratulations,',userName,'your Total Score is: ',score));


