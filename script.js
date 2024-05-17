'use strict'
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newButton = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
let diceNumber = 0;
let currentScore = 0;
let currentPlayer = 0;
let totalScore = [0,0];

//what happend if Roll button is clicked.
const rollFunction = function()
{
    diceNumber = Math.trunc(Math.random() * 6)+1;
    console.log(diceNumber);
    if(diceNumber !== 1)
        {
            dice.src=`dice-${diceNumber}.png`;
            currentScore+= diceNumber;
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
        }
    else
        {
            currentScore = 0;
            dice.src=`dice-${diceNumber}.png`;
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
            currentPlayer = currentPlayer === 0? 1:0;
            document.querySelector(`.player--0`).classList.toggle('player--active');
            document.querySelector(`.player--1`).classList.toggle('player--active');
        }
};

//what happened if Hold button is clicked.
const holdFunction = function()
{
    totalScore[`${currentPlayer}`]+=currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent = totalScore[`${currentPlayer}`];
        if(totalScore[`${currentPlayer}`] >= 100)
            {
                rollButton.textContent = `player ${currentPlayer + 1} won the match`;
                currentScore = 0;
                totalScore = [0,0];
                diceNumber = 0;
                rollButton.disabled = true;
                // Or We can use this setAttrivute function also.
                // rollButton.setAttribute('disabled', '');
                holdButton.disabled = true;
                // holdButton.setAttribute('disabled', '');
            }
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
    currentPlayer = currentPlayer === 0? 1:0;
    document.querySelector(`.player--0`).classList.toggle('player--active');
    document.querySelector(`.player--1`).classList.toggle('player--active');
};

//what happened if New Game button is clicked.
const newFunction = function()
    {
    diceNumber = 0;
    currentScore = 0;
    currentPlayer = 0;
    totalScore = [0,0];
    rollButton.textContent = '🎲 Roll dice';
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    };


rollButton.addEventListener('click',rollFunction );
holdButton.addEventListener('click', holdFunction);
newButton.addEventListener('click', newFunction);

// const newGame = document.querySelector('.btn--new');
// const rolldice = document.querySelector('.btn--roll');
// const hold = document.querySelector('.btn--hold');
// let currentPlayer = 0;
// let currentScore = 0;
// let totalScore = [0,0];
// const rollFunction = function(){
//     let diceNumber = Math.trunc(Math.random()*6) + 1;
//     // console.log(diceNumber);
//     if(diceNumber !=1)
//         {
//             document.querySelector('.dice').src = `dice-${diceNumber}.png`;
//             currentScore+= diceNumber;
//             document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
//         }
//     else
//         {
//             document.querySelector('.dice').src = `dice-1.png`;
//             currentScore = 0;
//             document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
//             currentPlayer = currentPlayer === 0? 1:0;
//             document.querySelector('.player--0').classList.toggle('player--active');
//             document.querySelector('.player--1').classList.toggle('player--active');
//         }
// }

// const holdFunction = function(){
//     totalScore[`${currentPlayer}`]+= currentScore;
//     if(totalScore[`${currentPlayer}`]>= 100)
//         {
//             hold.disabled = true;
//             rolldice.disabled = true;
//             document.getElementById(`score--${currentPlayer}`).textContent= totalScore[`${currentPlayer}`];
//             rolldice.textContent=`Player- ${currentPlayer+1} won the match 🏆`;
//             currentScore = 0;
//             totalScore =[0,0];
//             document.getElementById('current--0').textContent=0;
//             document.getElementById('current--1').textContent=0;
//         }
//     else
//         {
//             document.getElementById(`score--${currentPlayer}`).textContent= totalScore[`${currentPlayer}`];
//             currentScore = 0;
//             document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
//             currentPlayer = currentPlayer === 0? 1:0;
//             document.querySelector('.player--0').classList.toggle('player--active');
//             document.querySelector('.player--1').classList.toggle('player--active');
//         }
// }

// const newGameFunction= function(){
//     currentScore = 0;
//     totalScore =[0,0];
//     currentPlayer = 0;
//     document.getElementById('current--0').textContent=0;
//     document.getElementById('current--1').textContent=0;
//     document.getElementById(`score--0`).textContent =0;
//     document.getElementById(`score--1`).textContent =0;
//     document.querySelector('.player--0').classList.add('player--active');
//     document.querySelector('.player--1').classList.remove('player--active');
//     document.querySelector('.dice').src = `dice-5.png`;
//     rolldice.textContent=`🎲 Roll dice`;
//     rolldice.disabled = false;
//     hold.disabled = false;
// }
// rolldice.addEventListener('click', rollFunction);
// hold.addEventListener('click', holdFunction);
// newGame.addEventListener('click', newGameFunction);