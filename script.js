'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

// Put Scores to 0
score0El.textContent = 0;
score1El.textContent = 0;

// Hide Dice
diceEl.classList.add('hidden');
