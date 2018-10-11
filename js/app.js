'use strict'
var answers = ["hamburgers", "sandwiches", "steak", "shrimp" ];

var tally = 0;
alert('Welcome! Let\'s play a game.');

var username = prompt("What is your name?");

alert('Welcome, ' + username + '! Let\'s get started!');

function questionOne(){
  var answerOne = prompt('Do I have more than three pets?').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    alert('Wrong!, I am not that crazy.');
    console.log('user got question 1 correct');
  }else{
    alert('Right, two is alredy too many.');
    console.log('The user got question 1 correct');
    tally += 1;
  }
}

function questionTwo(){
  var answerTwo = prompt('Do I like winning?').toLowerCase();

  if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Right! Winner winner chicken dinner!');
    console.log('user got question 2 correct');
    tally += 1;
  } else {
    alert('Wrong, I like winning!');
    console.log('The user got question 2 WRONG!');
  }
}

function questionThree(){
  var answerThree = prompt('Am I cool?').toLowerCase();

  if (answerThree === 'yes' || answerThree === 'y') {
    alert('Yes! At least I like to think so');
    console.log('user got question 3 right!');
    tally += 1;
  } else {
    alert('Wrong');
    console.log('The user got question 3 WRONG!');
  }
}

function questionFour(){
  var answerFour = prompt('Does Jared make the best hamburgers?').toLowerCase();

  if (answerFour === 'yes' || answerFour === 'y') {
    alert('Right! Of course he does!');
    console.log('user got question 4 correct');
    tally += 1;
  } else {
    alert('Wrong, his burgers are the yummmiest!');
    console.log('The user got question 1 WRONG!');
  }
}

function questionFive(){
  var answerFive = prompt('Are there any more questions after this one?').toLowerCase();

  if (answerFive === 'yes' || answerFive === 'y') {
    alert('Right, we are not done.');
    console.log('user got question 5 correct!');
    tally += 1;
  } else {
    alert('Sorry, not done yet.');
    console.log('The user got question 5 wrong.');
  }
}

function questionSix(){
  var i = 4;
  alert('Time to play a guessing game.')
  do { 
    var answerSix = Number(prompt('Give me a number.'));
    i--;
    if (answerSix === 17) {
      tally++;
      alert('Yes, that is correct.')
      console.log('The user got question 6 correct')
      break;
    } if (answerSix < 17){
      alert('Too low.')
    } if (answerSix > 17){
      alert('Too hight')
    } if (i === 0) {
      alert('Sorry ' + username + ', You are out of guesses')
    }  
  }
  while (i > 0);
}

function questionSeven(){
  var j = 0;
  do {
    var answerSeven = prompt('Guess one of my favorite foods.').toLowerCase();
    if (answers.includes(answerSeven)){
      alert('GREAT');
      tally ++;
      console.log('user got one more correct');
      break;
    } else {
      j ++;
      alert('wrong');
    }
  }
  while (j < 7);
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

alert('Good job ' + username + ', you got ' + tally + ' right.');