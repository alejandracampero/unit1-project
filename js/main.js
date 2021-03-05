/*------------------------- constants -------------------------*/

const cards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];



/*------------------------- Vars -------------------------*/
let player1stack = [];
let player2stack = [];
let player1Flip = [];
let player2Flip = [];



/*------------------------- Cached elements  -------------------------*/

const p1deck = document.getElementById('p1deck');
const p2deck = document.getElementById('p2deck');
const p1flip = document.getElementById('p1flip');
const p2flip = document.getElementById('p2flip');
const dealButton = document.getElementById('deal-btn');
const flipButton = document.getElementById('flip-btn');



/*------------------------- Event Listeners  -------------------------*/
dealButton.addEventListener('click', handleDeal);
flipButton.addEventListener('click', handleclick );

/*------------------------- Functions  -------------------------*/

