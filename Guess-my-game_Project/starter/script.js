'use strict';

// These variables are called the state variable.
// *****************************
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
// ******************************
//  Game Functionalities

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const msg = document.querySelector('.message');
const number = document.querySelector('.number');
const body = document.querySelector('body');

// Implementing the play-game functionlity.

checkBtn.addEventListener('click', e => {
  const guess = Number(document.querySelector('.guess').value);
  // When there is not any guess from the user
  if (!guess && score > 0) {
    msg.textContent = 'No number selected!! 😅 ';
    score--;
    document.querySelector('.score').textContent = score;
  }
  //when the user selects the correct number
  else if (guess === secretNumber) {
    msg.textContent = 'Correct number 😎';
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // document.querySelector('.guess').value = '';
  }
  // When guess is wrong!!
  else if (guess !== secretNumber && score > 1) {
    msg.textContent = guess > secretNumber ? 'Too high!! 🤦‍♂️' : 'Too Low!! 🤷‍♂️';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    msg.textContent = 'Sorry! You lose 😔';
    body.style.backgroundColor = 'red';
    number.textContent = secretNumber;
    score = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
  }
});

// Implementing the reset game functionality.

againBtn.addEventListener('click', e => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  number.textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  msg.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
