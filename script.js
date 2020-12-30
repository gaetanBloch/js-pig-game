'use strict';

const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const currentPlayer1 = document.querySelector('#current--0');
const currentPlayer2 = document.querySelector('#current--1');

const dice = document.querySelector('.dice');

const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

const random = () => Math.trunc(Math.random() * 6) + 1;

let player1 = true;
rollButton.addEventListener('click', () => {
  const diceValue = random();
  dice.src = `dice-${diceValue}.png`;
  if (player1) {
    currentPlayer1 = Number(currentPlayer1) + diceValue;
  }
});
