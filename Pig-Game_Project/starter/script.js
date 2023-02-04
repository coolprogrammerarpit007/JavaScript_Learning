'use strict';

// Selecting Elements
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');

const currentScorePlayer1 = document.querySelector('#current--0');
const currentScorePlayer2 = document.querySelector('#current--1');

const dice = document.querySelector('.dice');

const rollDiceBtn = document.querySelector('.btn--roll');
const holdDiceBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

/*  ********************************  */

// State Variables

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

/*  ********************************  */

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

// Adding Default Settings to the game when it loads.

// ***********************************

scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
dice.classList.add('hidden');

// *************************************

// Roll-Dice function

const rollDice = function () {
  if (playing) {
    // Generate a random dice roll
    let randomDice = Math.floor(Math.random() * 6) + 1;
    // Display the dice roll
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDice}.png`;

    // Check for rolled: 1
    if (randomDice !== 1) {
      // Add dice to current Score
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // then switch for new player
      switchPlayer();
    }
  }
};

// Hold your dice function

const holdDice = function () {
  if (playing) {
    // Add Current Score to total Score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if total Score is greater than 100
    if (scores[activePlayer] >= 100) {
      // Score is greater than 100! Declare current player winner and finish the game
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Continue the game and switch to the next player
      switchPlayer();
    }
  }
};

// Reset Game Function

const playAgain = function () {
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  currentScorePlayer1.textContent = currentScore;
  currentScorePlayer2.textContent = currentScore;
  scorePlayer1.textContent = scores[0];
  scorePlayer2.textContent = scores[1];
  if (!playing) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    playing = true;
  }
  if (!dice.classList.contains('hidden')) {
    dice.classList.add('hidden');
  }

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};

// Adding the Role-dice functionality to the game

rollDiceBtn.addEventListener('click', rollDice);

// Addding the holding score functionality to the game

holdDiceBtn.addEventListener('click', holdDice);

// Adding the Reset game functionlity

newGameBtn.addEventListener('click', playAgain);
