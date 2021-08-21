let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let message = "";
let isAlive = true;
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el");
let cardEL = document.querySelector("#card-el");
let cards = [firstCard, secondCard];

function getRandomCard(){
    let randomNumber= Math.floor( Math.random()*13) + 1
   if(randomNumber ===1){
       return 11 ;
   }
   else if(randomNumber >10){
       return 10
   }else{
       return randomNumber;
   }
}




function startGame() {
  renderGame();
}
function renderGame() {
  sumEl.textContent = "SUM :" + sum;
  // cardEL.textContent = "CARDS :" + cards[0] +" " + cards[1]
  cardEL.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEL.textContent += cards[i] + " ";
  }
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "woohoo! you've got blackjak!";
    hasBlackjack = true;
  } else {
    message = "you are out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(message);
}

function newCard() {
  let card = 6;
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
  //  cardEL.textContent = "CARDS :" + firstCard +" " + secondCard + " " +card
}
