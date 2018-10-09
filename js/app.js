'use strict'

alert('Welcome! Let\'s play a game.');

var username = prompt("What is your name?");

alert('Welcome, ' + username + '! Let\'s get started!');

var answerOne = prompt('Do I have more than three pets?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
    alert('Right!');
    console.log('user got question 1 correct')
}else{
    alert('Wrong');
    console.log('The user got question 1 WRONG!')
}

var answerTwo = prompt('Do I like winning?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Right! Winner winner chicken dinner!');
    console.log('user got question 2 correct')
}else{
    alert('Wrong, I like winning!');
    console.log('The user got question 2 WRONG!')
}
var answerThree = prompt('Am I cool?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
    alert('Yes! At least I like to think so');
    console.log('user got question 3 right!')
}else{
    alert('Wrong');
    console.log('The user got question 3 WRONG!')
}
var answerFour = prompt('Does Jared make the best hamburgers?').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
    alert('Right! Of course he does!');
    console.log('user got question 4 correct')
}else{
    alert('Wrong, his burgers are the yummmiest!');
    console.log('The user got question 1 WRONG!')
}
var answerFive = prompt('Are there any more questions after this one?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
    alert('WRONG!, we are done.');
    console.log('user got question 5 wrong!')
}else{
    alert('Correct and goodbye.');
    console.log('The user got question 1 correct.')
}