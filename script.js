'use strict';

const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
// const currentPlayer1 = document.querySelector('#current--0');
// const currentPlayer2 = document.querySelector('#current--1');

const dice = document.querySelector('.dice');

const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newButton = document.querySelector('.btn--new');

const WIN_VALUE = 100;

const random = () => Math.trunc(Math.random() * 6) + 1;

const changePlayer = (newPlayer, previousPlayer) => {
  document.querySelector('#current--' + previousPlayer).textContent = 0;
  document
    .querySelector('.player--' + newPlayer)
    .classList.add('player--active');
  document
    .querySelector('.player--' + previousPlayer)
    .classList.remove('player--active');
};

const addToCurrent = (current, diceValue) => {
  const currentPlayer = document.querySelector('#current--' + current);
  currentPlayer.textContent = Number(currentPlayer.textContent) + diceValue;
};

let isPlayer1 = true;

rollButton.addEventListener('click', () => {
  const diceValue = random();

  dice.src = `dice-${diceValue}.png`;

  if (diceValue === 1) {
    isPlayer1 = !isPlayer1;
    isPlayer1 ? changePlayer(0, 1) : changePlayer(1, 0);
    return;
  }

  isPlayer1 ? addToCurrent(0, diceValue) : addToCurrent(1, diceValue);
});
