'use strict';
// issues:
// 1. SELECTING AND MANIPULATING ELEMENTS
// 2. HANDLIN CLICK EVENTS
// 3. Manipulating css styles

/*SELECTING AND MANIPULATING ELEMENTS
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'YOU WIN!!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
*/
// HANDLIN CLICK EVENTS
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   if (document.querySelector('.guess').value === '') {
//     document.querySelector('.message').textContent = "It's empty !!";
//   } else {
//     document.querySelector('.message').textContent = 'YOU WIN!!';
//   }
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayscore = function (score) {
  document.querySelector('.score').textContent = score;
};
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.score').textContent = score; //Score:20
  displayscore(score);
  document.querySelector('body').style.backgroundColor = '#222'; //Background
  document.querySelector('.number').textContent = '?'; //secret number
  document.querySelector('.number').style.width = '15rem'; //secret box width
  displayMessage('Start Guessing');
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    if (score > 1) {
      score--;
      // document.querySelector('.message').textContent = "It's empty !!";
      displayMessage("It's empty !!");
      displayscore(score);
    } else {
      // document.querySelector('.message').textContent = 'You Lost!!';
      displayMessage('You Lost!!');
      score = 0;
      // document.querySelector('.score').textContent = score;
      displayscore(score);
    }
  }
  //When player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'true!!';
    displayMessage('You Win!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When guess too high or too low
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = 'too high!!';
      guess > secretNumber
        ? displayMessage('Too High')
        : displayMessage('Too Low');
      score--;
      // document.querySelector('.score').textContent = score;
      displayscore(score);
    } else {
      // document.querySelector('.message').textContent = 'You Lost!!';
      displayMessage('You Lost!!');

      score = 0;
      // document.querySelector('.score').textContent = score;
      displayscore(score);
    }
  }
  //When guess too low
  // else {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost!!';
  //     score = 0;
  //     document.querySelector('.score').textContent = score;
  //   }
  // }
});

//Manipulating css styles
//Examlpe:
// document.querySelector("body").style.backgroundColor = "#60b347" ;//without dot(.).
