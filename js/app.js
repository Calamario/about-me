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

// Let the user know the start and rules of the game
alert('Let\'s now play a game! I\'m going to ask you a series of question about myself and all you have to do is answer them by typing either "yes" or "no". Okay, here we go!');
// Right or Wrong responses in variables for fewer typing out
var correctAns = 'Yep, you\'re right! :)';
var wrongAns = 'Sorry, you\'re wrong :(';

// Question 1 about Sports
var favSport = prompt('Do you think my favorite sport is soccer?');
if (favSport === null) {
  alert('You didn\'t say anything!');
  console.log('User did not make an input');
}else if(favSport.toLowerCase() === 'yes') {
  alert(wrongAns);
  console.log('User thinks I like soccer');
}else if(favSport.toLowerCase() === 'no') {
  alert(correctAns);
  console.log('User thinks I do not like soccer');
}else {
  alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
  console.log('User did not follow the rules');
}
alert('Soccer isn\'t my favorite sport. My favorite is actually Ultimate Frisbee. I also like a bunch of other sports like Tennis, ping pong, and e-sports haha.');

// Question 2 about pets
var favPets = prompt('My favorite pets are dogs! Do you think that statement is true?');
if (favPets === null) {
  alert('You didn\'t say anything!');
  console.log('User did not make an input');
}else if(favPets.toLowerCase() === 'yes') {
  alert(correctAns);
  console.log('User thinks I like dogs');
}else if(favPets.toLowerCase() === 'no') {
  alert(wrongAns);
  console.log('User thinks I do not like dogs');
}else {
  alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
  console.log('User did not follow the rules');
}
alert(' I love dogs; in fact, I have two dogs! A shibe named Luna and half-shibe half-husky named Noctis!');

// Question 3 about Karaoke
var favKaraoke = prompt('Do you think I like karaoke?');
if (favKaraoke === null) {
  alert('You didn\'t say anything!');
  console.log('User did not make an input');
}else if(favKaraoke.toLowerCase() === 'yes') {
  alert(correctAns);
  console.log('User thinks I like karaoke');
}else if(favKaraoke.toLowerCase() === 'no') {
  alert(wrongAns);
  console.log('User thinks I do not karaoke');
}else {
  alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
  console.log('User did not follow the rules');
}
alert('Karaoke is one of my favorite things to do. It\'s just unfortunate that I\'m pretty toned-death. It\'s all good if you are having fun right? XP');

// Question 4 about color
var favColor = prompt('My favoirte font color is Red? Is this true about me?');
if (favColor === null) {
  alert('You didn\'t say anything!');
  console.log('User did not make an input');
} else if(favColor.toLocaleLowerCase() === 'yes') {
  alert(correctAns);
  console.log('User thinks I like red');
} else if(favColor.toLocaleLowerCase() === 'no') {
  alert(wrongAns);
  console.log('User thinks I do not like red');
} else {
  alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
  console.log('User did not follow the rules');
} 
alert('My favorite color is red, Just like SuperMario\'s favorite color.');

// Goodbye statement
alert('Thanks for playing this game with me! Hope you learned a thing or two about me.');
