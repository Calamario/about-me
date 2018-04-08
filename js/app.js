// 'use strict';

// function intro(){
//   alert('Welcome to Mario\'s About Me page!');
//   // Intro question about my name
//   var myEthnicity = prompt('I first have to ask you, did you find it surprising that my name is MARIO even though I\'m Asian American? Answer y or n.');
//   // Checks to make sure user inputted at least something
//   if(myEthnicity === null) {
//     alert('I guess, I won\'t know if you were surprised');
//     console.log('User did not make an input');
//   } else if(myEthnicity.toLowerCase() === 'y') {
//     alert('Haha, it\'s different right? My parents wanted a name that could be used in both Japan and US!');
//     console.log('User was surprised by my name.');
//   } else if(myEthnicity.toLowerCase() === 'n') {
//     alert('Oh really? Did you meet another Asian with the name Mario. You have to introduce me to them sometime!');
//     console.log('User was not surprised by my name.');
//   } else {
//     alert('You didn\'t answer with y or n.');
//     console.log('User made a wrong input');
//   }
//   alert('Let\'s play a game now! I will ask you are series of yes or no questions about me. I will make sure to keep score so try your best! \n For these questions you can answer y or n,  yes or no');
// }


// var scoreKeeper = 0;
// function gameQuestions(scoreKeeper){
//   var questions = ['Do you think my favorite sport is soccer?', 'My favorite pets are dogs! Do you think that statement is true?', 'Do you think I like karaoke?', 'My favorite color is Red? Is this true about me?']; // questions used for 1 to 4
//   var answers = [ ['n', 'y', 'y', 'y'], ['no', 'yes', 'yes', 'yes'] ]; // possible answers the user can input
//   var funFact = ['Soccer isn\'t my favorite sport. My favorite is actually Ultimate Frisbee. I also like a bunch of other sports like Tennis, ping pong, and e-sports haha.', 'I love dogs; in fact, I have two dogs! A shibe named Luna and half-shibe half-husky named Noctis!', 'Karaoke is one of my favorite things to do. It\'s just unfortunate that I\'m pretty toned-death. It\'s all good if you are having fun right? XP', 'My favorite color is red, just like SuperMario\'s favorite color.'];
//   var guessArray = [];

//   // function used to keep score and alert user if they were correct or wrong.
//   function rightWrong(x, i, scoreKeeper) {
//     if(answers[x][i] === guessArray[i].toLowerCase()) {
//       scoreKeeper++;
//       alert('Yep, you\'re right! :) \n Right now your score is ' + scoreKeeper + '/6 points');
//     } else {
//       alert('Sorry, you\'re wrong. :( \n Right now your score is ' + scoreKeeper + '/6 points');
//     }
//     return scoreKeeper;
//   }

//   for(var i = 0; i < questions.length; i ++) {
//     guessArray.push(prompt(questions[i]));
//     if(guessArray[i].length === 1) {
//       scoreKeeper = rightWrong(0, i, scoreKeeper);
//     } else {
//       scoreKeeper = rightWrong(1, i, scoreKeeper);
//     }
//     alert(funFact[i]);
//   }
//   return scoreKeeper;
// }




// // 5th question that asks the user for a number as an input
// function questionFive(){
//   alert('Alright, question 5 is not so much an About Me question but how like minded we are. I am going to think of a number that is between 1 and 10. You have to guess what number I\'m thinking of. You get 4 tries.');
//   var userNum = prompt('Okay... I got one! What is your first guess?');
//   console.log('This is the user\'s first guess');
//   console.log('User guessed ' + userNum);
//   // Creates a random float from 0 to 1, *10+1 changes it to a float from 1 to 10, floor makes it an integer
//   var randNum = Math.floor(Math.random() * 10 + 1);
//   var count = 1;
//   // Continues checking if the inputted number is bigger or smaller or equal for the first 3 tries
//   while(randNum !== userNum && count < 4) {
//     userNum = parseInt(userNum);
//     if (randNum > userNum) {
//       count ++;
//       userNum = prompt('Not quite, I\'ll give you a hint, you are too low. \n' + (5 - count) + ' tries left');
//       console.log('This is the user\'s try number', count);
//       console.log('User guessed ' + userNum);
//     } else if(randNum < userNum) {
//       count ++;
//       userNum = prompt('Not quite, I\'ll give you a hint, you are too high. \n' + (5 - count) + ' tries left');
//       console.log('This is the user\'s try number', count);
//       console.log('User guessed ' + userNum);
//     }
//   }
//   // To check if the 4th input of user was correct and gives the final alert for the problem
//   if(parseInt(userNum) === randNum) {
//     if(count === 1) {
//       scoreKeeper += 100;
//       alert('Nice job! You guessed the number I was thinking in on your first try! We must be Super a like! I\'ll give you all the points! \n You now have ' + scoreKeeper + ' points out of 6.');
//     } else if (count < 4) {
//       scoreKeeper++;
//       alert('Nice job! You guessed the number I was thinking in ' + count + ' tries. \n You now have ' + scoreKeeper + ' points out of 6.');
//     } else {
//       scoreKeeper++;
//       alert('Phew! You guessed the number on your last try! \n You now have ' + scoreKeeper + ' points out of 6.');
//     }
//   } else {
//     alert('You used up all your tries. The number I was thinking was ' + randNum + '. \n Your current point is ' + scoreKeeper + ' out of 6');
//   }
//   return scoreKeeper;
// }


// // 6th Question preface
// function questionSix(){
//   var arrayOfAnswers = ['MONSTERS INC', 'WALL-E', 'FINDING NEMO'];
//   alert('Alright, time for the last question!');
//   alert('dun');
//   alert('DUN');
//   alert('DUUUNNN');
//   alert('For the last question, I came up with my top 3 Pixar movies. I know what you are thinking. "Impossible! They are all so good!" I know, I know. But I did it for you. Now, if you can even guess a single one on my list out of 6 tries then you win! Easy right? Oh and one thing, do NOT misspell the title! That\'s just disgraceful. Good luck!');
//   // Asks the user for a movie title, uppercases it and checks the array for the same item. Continues until the chances hit 6 or they guess the correct movie.
//   var chances = 0;
//   var flag = true;
//   while (chances < 6 && flag){
//     chances ++;
//     var userGuess = prompt('What is my top 3 Pixar Movies? This is your ' + chances + '/6 try');
//     console.log('The user has guessed', userGuess);
//     for(var j = 0; j < arrayOfAnswers.length; j++) {
//       if(userGuess.toUpperCase() === arrayOfAnswers[j]) {
//         scoreKeeper++;
//         alert('Good job! You got it. ' + userGuess + ' is one of my favorite Pixar movies! You now have ' + scoreKeeper + ' points out of 6.');
//         console.log('User guessed one of my top 3 movies correctly.');
//         flag = false;
//       } else {
//         console.log('user\'s guess is different from item ' + j + ' in array');
//       }
//     }
//     if (flag === true) {
//       alert('That\'s a good movie, but it is not my top 3 movies. ');
//     }
//   }
//   return scoreKeeper;
// }
// // Goodbye statement
// function goodBye(x){
//   alert('Thanks for playing this game with me! Hope you learned a thing or two about me. \n  You got ' + x + ' out of 6!');
// }


// intro();
// scoreKeeper = gameQuestions(scoreKeeper);
// scoreKeeper = questionFive(scoreKeeper);
// scoreKeeper = questionSix(scoreKeeper);
// goodBye(scoreKeeper);