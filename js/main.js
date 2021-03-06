/*------------------------- constants -------------------------*/

const cards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];



/*------------------------- Vars -------------------------*/
let player1Stack = [];
let player2Stack = [];
let player1Flip = [];
let player2Flip = [];



/*------------------------- Cached elements  -------------------------*/

// const p1deckEl = document.getElementById('p1deck');
// const p2deckEl= document.getElementById('p2deck');
// const p1flipEl = document.getElementById('p1flip');
// const p2flipEl = document.getElementById('p2flip');
// const dealButton = document.getElementById('deal-btn');
// const flipButton = document.getElementById('flip-btn');



/*------------------------- Event Listeners  -------------------------*/
// dealButton.addEventListener('click', handleDeal);
// flipButton.addEventListener('click', handleclick );

/*------------------------- Functions  -------------------------*/


  function shuffleCards() {
    let temp = null
    for (let = idx = cards.length - 1; idx > 0; idx -= 1) {
        let rndIdx = Math.floor(Math.random() * (idx + 1))
        temp = cards[idx]
        cards[idx] = cards[rndIdx]
        cards[rndIdx] = temp
    }
    console.log (cards)
    return cards
  }


  function dealCards(){
    shuffleCards();
    if (cards.length > 0) {
        for (let i = 0; i < 26; i++) {
            let cardDealt1;
            cardDealt1 = cards.splice(0, 1);
            player1Stack.push(cardDealt1);
            player1Stack = player1Stack.flat()
        }
        for (let i = 0; i < 26; i++) {
            let cardDealt2;
            cardDealt2 = cards.splice(0, 1);
            player2Stack.push(cardDealt2);
            player2Stack = player2Stack.flat()
        }
    }
    console.log(player1Stack)
    console.log(player2Stack)
  }

dealCards()



