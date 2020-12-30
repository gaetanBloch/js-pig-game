'use strict';

const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const currentPlayer1 = document.querySelector('#current--0');
const currentPlayer2 = document.querySelector('#current--1');

const dice = document.querySelector('.dice');

const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

const WIN_VALUE = 100;

const random = () => Math.trunc(Math.random() * 6) + 1;

let isPlayer1 = true;
rollButton.addEventListener('click', () => {
  const diceValue = random();
  const current1Text = currentPlayer1.textContent;
  const current2Text = currentPlayer2.textContent;

  dice.src = `dice-${diceValue}.png`;

  if (isPlayer1) {
    currentPlayer1.textContent = Number(current1Text) + diceValue;
  } else {
    currentPlayer2.textContent = Number(current2Text) + diceValue;
  }
  isPlayer1 != isPlayer1;
});
