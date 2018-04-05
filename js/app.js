'use strict';

alert('Welcome to Mario\'s About Me page!');
// Intro question about my name
var myEthnicity = prompt('I first have to ask you, did you find it surprising that my name is MARIO even though I\'m Asian American? Answer y or n.');
// Checks to make sure user inputted at least something
if(myEthnicity === null) {
  alert('I guess, I won\'t know if you were surprised');
  console.log('User did not make an input');
}else if(myEthnicity.toLowerCase() === 'y') {
  alert('Haha, it\'s different right? My parents wanted a name that could be used in both Japan and US!');
  console.log('User was surprised by my name.');
}else if(myEthnicity.toLowerCase() === 'n') {
  alert('Oh really? Did you meet another Asian with the name Mario. You have to introduce me to them sometime!');
  console.log('User was not surprised by my name.');
}else {
  alert('You didn\'t answer with y or n.');
  console.log('User made a wrong input');
}


var questions = ['Do you think my favorite sport is soccer?', 'My favorite pets are dogs! Do you think that statement is true?', 'Do you think I like karaoke?', 'My favorite color is Red? Is this true about me?']; // questions used for 1 to 4
var answers = [ ['n', 'y', 'y', 'y'], ['no', 'yes', 'yes', 'yes'] ];
var funFact = ['Soccer isn\'t my favorite sport. My favorite is actually Ultimate Frisbee. I also like a bunch of other sports like Tennis, ping pong, and e-sports haha.', 'I love dogs; in fact, I have two dogs! A shibe named Luna and half-shibe half-husky named Noctis!', 'Karaoke is one of my favorite things to do. It\'s just unfortunate that I\'m pretty toned-death. It\'s all good if you are having fun right? XP', 'My favorite color is red, just like SuperMario\'s favorite color.'];
var guessArray = [];

for(var i = 0; i < questions.length; i ++) {
  guessArray.push(prompt(questions[i]));
  if(guessArray[i].length === 1) {
    if(answers[0][i] === guessArray[i].toLowerCase()) {
      alert('Yep, you\'re right! :) ');
    } else {
      alert('Sorry, you\'re wrong. :( ');
    }
  } else {
    if(answers[1][i] === guessArray[i].toLowerCase()) {
      alert('Yep, you\'re right! :) ');
    } else {
      alert('Sorry, you\'re wrong. :( ');
    }
  }
  alert(funFact[i]);
}

// // Let the user know the start and rules of the game
// alert('Let\'s now play a game! I\'m going to ask you a series of question about myself and all you have to do is answer them by typing either "yes" or "no". Okay, here we go!');
// // Keeps track of points throughout the game
// var pointSystem = 0;
// // Right or Wrong responses in variables for fewer typing out
// var correctAns = 'Yep, you\'re right! :) ';
// var wrongAns = 'Sorry, you\'re wrong :( ';

// // Question 1 about Sports
// var favSport = prompt('Do you think my favorite sport is soccer?');
// if (favSport === null) {
//   alert('You didn\'t say anything!');
//   console.log('User did not make an input');
// }else if(favSport.toLowerCase() === 'yes') {
//   alert(wrongAns + 'Your current point is ' + pointSystem + ' out of 6');
//   console.log('User thinks I like soccer');
// }else if(favSport.toLowerCase() === 'no') {
//   pointSystem++;
//   alert(correctAns + 'Your current point is ' + pointSystem + ' out of 6');
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
//   pointSystem ++;
//   alert(correctAns + 'Your current point is ' + pointSystem + ' out of 6');
//   console.log('User thinks I like dogs');
// }else if(favPets.toLowerCase() === 'no') {
//   alert(wrongAns + 'Your current point is ' + pointSystem + ' out of 6');
//   console.log('User thinks I do not like dogs');
// }else {
//   alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
//   console.log('User did not follow the rules');
// }
// alert('I love dogs; in fact, I have two dogs! A shibe named Luna and half-shibe half-husky named Noctis!');

// // Question 3 about Karaoke
// var favKaraoke = prompt('Do you think I like karaoke?');
// if (favKaraoke === null) {
//   alert('You didn\'t say anything!');
//   console.log('User did not make an input');
// }else if(favKaraoke.toLowerCase() === 'yes') {
//   pointSystem ++;
//   alert(correctAns + 'Your current point is ' + pointSystem + ' out of 6');
//   console.log('User thinks I like karaoke');
// }else if(favKaraoke.toLowerCase() === 'no') {
//   alert(wrongAns + 'Your current point is ' + pointSystem + ' out of 6');
//   console.log('User thinks I do not karaoke');
// }else {
//   alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
//   console.log('User did not follow the rules');
// }
// alert('Karaoke is one of my favorite things to do. It\'s just unfortunate that I\'m pretty toned-death. It\'s all good if you are having fun right? XP');

// // Question 4 about color
// var favColor = prompt('My favorite color is Red? Is this true about me?');
// if (favColor === null) {
//   alert('You didn\'t say anything!');
//   console.log('User did not make an input');
// }else if(favColor.toLocaleLowerCase() === 'yes') {
//   pointSystem ++;
//   alert(correctAns + 'Your current point is ' + pointSystem + ' out of 6');
//   console.log('User thinks I like red');
// }else if(favColor.toLocaleLowerCase() === 'no') {
//   alert(wrongAns + 'Your current point is ' + pointSystem + ' out of 6');
//   console.log('User thinks I do not like red');
// }else {
//   alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
//   console.log('User did not follow the rules');
// }
// alert('My favorite color is red, just like SuperMario\'s favorite color.');

// // 5th question that asks the user for a number as an input
// alert('Alright, question 5 is not so much an About Me question but how like minded we are. I am going to think of a number that is between 1 and 10. You have to guess what number I\'m thinking of. You get 4 tries.');
// var userNum = prompt('Okay... I got one! What is your first guess?');
// console.log('This is the user\'s first guess');
// console.log('User guessed ' + userNum);
// // Creates a random float from 0 to 1, *10+1 changes it to a float from 1 to 10, floor makes it an integer
// var randNum = Math.floor(Math.random() * 10 + 1);
// var count = 1;

// // Continues checking if the inputted number is bigger or smaller or equal for the first 3 tries
// while(randNum !== userNum && count < 4) {
//   userNum = parseInt(userNum);
//   if (randNum > userNum) {
//     count ++;
//     userNum = prompt('Not quite, I\'ll give you a hint, you are too low. ' + (5 - count) + ' tries left');
//     console.log('This is the user\'s try number', count);
//     console.log('User guessed ' + userNum);
//   } else if(randNum < userNum) {
//     count ++;
//     userNum = prompt('Not quite, I\'ll give you a hint, you are too high. ' + (5 - count) + ' tries left');
//     console.log('This is the user\'s try number', count);
//     console.log('User guessed ' + userNum);
//   } else {
//     break;
//   }
// }
// // To check if the 4th input of user was correct and gives the final alert for the problem
// if(parseInt(userNum) === randNum) {
//   if(count === 1) {
//     pointSystem += 100;
//     alert('Nice job! You guessed the number I was thinking in on your first try! We must be Super a like! I\'ll give you all the points! You now have ' + pointSystem + ' points out of 6.');
//   } else if (count < 4) {
//     pointSystem++;
//     alert('Nice job! You guessed the number I was thinking in ' + count + ' tries. You now have ' + pointSystem + ' points out of 6.');
//   } else {
//     pointSystem++;
//     alert('Phew! You guessed the number on your last try! You now have ' + pointSystem + ' points out of 6.');
//   }
// } else {
//   alert('You used up all your tries. The number I was thinking was ' + randNum + '. Your current point is ' + pointSystem + ' out of 6');
// }

// // 6th Question preface
// var arrayOfAnswers = ['MONSTERS INC', 'WALL-E', 'FINDING NEMO'];
// alert('Alright, time for the last question!');
// alert('dun');
// alert('DUN');
// alert('DUUUNNN');
// alert('For the last question, I came up with my top 3 Pixar movies. I know what you are thinking. "Impossible! They are all so good!" I know, I know. But I did it for you. Now, if you can even guess a single one on my list out of 6 tries then you win! Easy right? Oh and one thing, do NOT misspell the title! That\'s just disgraceful. Good luck!');
// // Asks the user for a movie title, uppercases it and checks the array for the same item. Continues until the chances hit 6 or they guess the correct movie.
// var chances = 0;
// var flag = true;
// while (chances < 6 && flag){
//   chances ++;
//   var userGuess = prompt('What is my top 3 Pixar Movies? This is your ' + chances + '/6 try');
//   console.log('The user has guessed', userGuess);
//   for(var i = 0; i < arrayOfAnswers.length; i++) {
//     if(userGuess.toUpperCase() === arrayOfAnswers[i]) {
//       pointSystem++;
//       alert('Good job! You got it. ' + userGuess + ' is one of my favorite Pixar movies! You now have ' + pointSystem + ' points out of 6.');
//       console.log('User guessed one of my top 3 movies correctly.');
//       flag = false;
//     } else {
//       console.log('user\'s guess is different from item ' + i + ' in array');
//     }
//   }
//   if (flag === true) {
//     alert('That\'s a good movie, but it is not my top 3 movies. ');
//   }
// }

// // Goodbye statement
// alert('Thanks for playing this game with me! Hope you learned a thing or two about me. You got ' + pointSystem + ' out of 6!');
