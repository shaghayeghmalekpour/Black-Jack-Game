let cards =[]
let sum= 0
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el");
let cardEL = document.querySelector("#card-el");
// let cards = [firstCard, secondCard];

//at first 
// let playerName = "per"
// let playerChips = 145

//second 
let player ={
  name: "per",
  chips: 145
}

let playerEl = document.querySelector("#player-el");
// playerEl.textContent = playerName + " : $" + playerChips
playerEl.textContent = player.name + " : $" + player.chips
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
  isAlive=true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
 sum = firstCard + secondCard;
 cards = [firstCard, secondCard];
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
  if( isAlive === true && hasBlackjack === false){
    let card = 6;
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }

  //  cardEL.textContent = "CARDS :" + firstCard +" " + secondCard + " " +card
}
