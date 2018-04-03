'use strict';

alert('Welcome to Mario\'s About Me page!');

var myEthnicity = prompt('I first have to ask you, did you find it surprising that my name is MARIO even though I\'m Asian American? Answer y or n.').toLowerCase();
if(myEthnicity === 'y') {
  alert('Haha, it\'s different right? My parents wanted a name that could be used in both Japan and US!');
  console.log('User was surprised by my name.');
} else if(myEthnicity === 'n') {
  alert('Oh really? Did you meet another Asian with the name Mario. You have to introduce me to them sometime!');
  console.log('User was not surprised by my name.');
} else {
  alert('I guess, I won\'t know if you were surprised');
  console.log('User made a wrong input');
}

alert('Let\'s now play a game! I\'m going to ask you a series of question about myself and all you have to do is answer them by typing either "yes" or "no". Okay, here we go!');

var correctAns = 'Yep, you\'re right! :)';
var wrongAns = 'Sorry, your\'re wrong :(';

var favSport = prompt('Do you think my favorite sport is soccer?').toLowerCase();
if(favSport === 'yes') {
  alert(wrongAns);
  console.log('User thinks I like soccer');
} else if(favSport === 'no') {
  alert(correctAns);
  console.log('User thinks I do not like soccer');
} else {
  alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
  console.log('User did not follow the rules');
}
alert('Soccer isn\'t my favorite sport. My favorite is actually Ultimate Frisbee. I also like a bunch of other sports like Tennis, ping pong, and e-sports haha.');

var favPets = prompt('My favorite pets are dogs! Do you think that statement is true?').toLocaleLowerCase();
if(favPets === 'yes') {
  alert(correctAns);
  console.log('User thinks I like dogs');
} else if(favPets === 'no') {
  alert(wrongAns);
  console.log('User thinks I do not like dogs');
} else {
  alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
  console.log('User did not follow the rules');
}
alert('In fact, I have two dogs! A shibe named Luna and half-shibe half-husky named Noctis!');

var favKaraoke = prompt('Do you think I like karaoke?').toLocaleLowerCase();
if(favKaraoke === 'yes') {
  alert(correctAns);
  console.log('User thinks I like karaoke');
} else if(favKaraoke === 'no') {
  alert(wrongAns);
  console.log('User thinks I do not karaoke');
} else {
  alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
  console.log('User did not follow the rules');
}
alert('Karaoke is one of my favorite things to do. It\'s just unfortunate that I\'m pretty toned-death. It\'s all good if you are having fun right? XP');

alert('Now for some Lighting Round. Remember to answer with "yes or "no".');

var favColor = prompt('My favoirte font color is Red? Is this true about me?').toLocaleLowerCase();
if(favColor === 'yes') {
  alert(correctAns);
  console.log('User thinks I like red');
} else if(favColor === 'no') {
  alert(wrongAns);
  console.log('User thinks I do not like red');
} else {
  alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
  console.log('User did not follow the rules');
}

var favShape = prompt('My favorite shape is Rectangles. Do you think that\'s true about me?').toLocaleLowerCase();
if(favShape === 'yes') {
  alert(correctAns);
  console.log('User thinks I like rectangles');
} else if(favShape === 'no') {
  alert(wrongAns);
  console.log('User thinks I do not like rectangles');
} else {
  alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
  console.log('User did not follow the rules');
}

var favFont = prompt('My favorite font is Futura? Is this true about me?').toLocaleLowerCase();
if(favFont === 'yes') {
  alert(correctAns);
  console.log('User thinks I like Futura');
} else if(favFont === 'no') {
  alert(wrongAns);
  console.log('User thinks I do not like Futura');
} else {
  alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
  console.log('User did not follow the rules');
}

var favWord = prompt('My favorite word is "Supreme"? Is this true?').toLocaleLowerCase();
if(favWord === 'yes') {
  alert(correctAns);
  console.log('User thinks I like the word "Supreme"');
} else if(favWord === 'no') {
  alert(wrongAns);
  console.log('User thinks I do not like the word "Supreme"');
} else {
  alert('Hey! Follow the rules of the game! Please answer "yes" or "no".');
  console.log('User did not follow the rules');
}
