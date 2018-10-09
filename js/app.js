'use strict'

alert('Welcome! Let\'s play a game.');

var username = prompt("What is your name?");

alert('Welcome, ' + username + '! Let\'s get started!');

var answerOne = prompt('Do I have more than three pets?');

if (answerOne === 'yes') {
    alert('Right!');
    console.log('user got question 1 correct')
}else{
    alert('Wrong');
    console.log('The user got question 1 WRONG!')
}