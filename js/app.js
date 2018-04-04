'use strict';

// alert('Welcome to Mario\'s About Me page!');
// // Intro question about my name
// var myEthnicity = prompt('I first have to ask you, did you find it surprising that my name is MARIO even though I\'m Asian American? Answer y or n.');
// // Checks to make sure user inputted at least something
// if(myEthnicity === null) {
//   alert('I guess, I won\'t know if you were surprised');
//   console.log('User did not make an input');
// }else if(myEthnicity.toLowerCase() === 'y') {
//   alert('Haha, it\'s different right? My parents wanted a name that could be used in both Japan and US!');
//   console.log('User was surprised by my name.');
// }else if(myEthnicity.toLowerCase() === 'n') {
//   alert('Oh really? Did you meet another Asian with the name Mario. You have to introduce me to them sometime!');
//   console.log('User was not surprised by my name.');
// }else {
//   alert('You didn\'t answer with y or n.');
//   console.log('User made a wrong input');
// }

// // Let the user know the start and rules of the game
// alert('Let\'s now play a game! I\'m going to ask you a series of question about myself and all you have to do is answer them by typing either "yes" or "no". Okay, here we go!');
// // Right or Wrong responses in variables for fewer typing out
// var correctAns = 'Yep, you\'re right! :)';
// var wrongAns = 'Sorry, you\'re wrong :(';

// // Question 1 about Sports
// var favSport = prompt('Do you think my favorite sport is soccer?');
// if (favSport === null) {
//   alert('You didn\'t say anything!');
//   console.log('User did not make an input');
// }else if(favSport.toLowerCase() === 'yes') {
//   alert(wrongAns);
//   console.log('User thinks I like soccer');
// }else if(favSport.toLowerCase() === 'no') {
//   alert(correctAns);
//   console.log('User thinks I do not like soccer');
// }else {
//   alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
//   console.log('User did not follow the rules');
// }
// alert('Soccer isn\'t my favorite sport. My favorite is actually Ultimate Frisbee. I also like a bunch of other sports like Tennis, ping pong, and e-sports haha.');

// // Question 2 about pets
// var favPets = prompt('My favorite pets are dogs! Do you think that statement is true?');
// if (favPets === null) {
//   alert('You didn\'t say anything!');
//   console.log('User did not make an input');
// }else if(favPets.toLowerCase() === 'yes') {
//   alert(correctAns);
//   console.log('User thinks I like dogs');
// }else if(favPets.toLowerCase() === 'no') {
//   alert(wrongAns);
//   console.log('User thinks I do not like dogs');
// }else {
//   alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
//   console.log('User did not follow the rules');
// }
// alert(' I love dogs; in fact, I have two dogs! A shibe named Luna and half-shibe half-husky named Noctis!');

// // Question 3 about Karaoke
// var favKaraoke = prompt('Do you think I like karaoke?');
// if (favKaraoke === null) {
//   alert('You didn\'t say anything!');
//   console.log('User did not make an input');
// }else if(favKaraoke.toLowerCase() === 'yes') {
//   alert(correctAns);
//   console.log('User thinks I like karaoke');
// }else if(favKaraoke.toLowerCase() === 'no') {
//   alert(wrongAns);
//   console.log('User thinks I do not karaoke');
// }else {
//   alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
//   console.log('User did not follow the rules');
// }
// alert('Karaoke is one of my favorite things to do. It\'s just unfortunate that I\'m pretty toned-death. It\'s all good if you are having fun right? XP');

// // Question 4 about color
// var favColor = prompt('My favoirte font color is Red? Is this true about me?');
// if (favColor === null) {
//   alert('You didn\'t say anything!');
//   console.log('User did not make an input');
// } else if(favColor.toLocaleLowerCase() === 'yes') {
//   alert(correctAns);
//   console.log('User thinks I like red');
// } else if(favColor.toLocaleLowerCase() === 'no') {
//   alert(wrongAns);
//   console.log('User thinks I do not like red');
// } else {
//   alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
//   console.log('User did not follow the rules');
// } 
// alert('My favorite color is red, Just like SuperMario\'s favorite color.');

// 5th question that asks the user for a number as an input
// var userNum = prompt('Alright, question 5 is not so much an About Me question but how like minded we are. I am going to think of a number that is between 1 and 10. You have to guess what number I\'m thinking of. You get 4 tries. Okay... I got one! What is your first guess?');
// console.log('This is the user\'s first guess');
// console.log('User guessed ' + userNum);
// var randNum = Math.floor(Math.random() * 10 + 1);
// var count = 1;
// // checks for no input as the first input
// if(userNum === null) {
//   alert('You did not guess a number! We will play next time then.');
//   console.log('User did not make an input');
// } else {
//   // Continues checking if the inputted number is bigger or smaller or equal
//   while(randNum !== userNum && count < 4) {
//     userNum = parseInt(userNum);
//     if (randNum > userNum) {
//       count ++;
//       userNum = prompt('Not quite, I\'ll give you a hint, you are too low. '+ count + '/4 try');
//       console.log('User guessed ' + userNum);
//       console.log('This is the user\'s ' + count + ' tries');
//     } else {
//       count ++;
//       userNum = prompt('Not quite, I\'ll give you a hint, you are too high. ' + count + '/4 try');
//       console.log('User guessed ' + userNum);
//       console.log('This is the user\'s ' + count + ' tries');
//     } 
//   //if (randNum < userNum) 
//   }
// }
// // To check if the 4th input of user was correct.
// if(parseInt(userNum) === randNum) {
//   if(count === 1) {
//     alert('Nice job! You guessed the number I was thinking in on your first try!');
//   } else if (count < 4) {
//     alert('Nice job! you guessed the number I was thinking in ' + count + ' tries');
//   } else {
//     alert('Phew! You guessed the number on your last try!');
//   }
// } else {
//   alert('You used up all your tries. The number I was thinking was ' + randNum);
// }

// 6th Question
var 


// Goodbye statement
alert('Thanks for playing this game with me! Hope you learned a thing or two about me.');
