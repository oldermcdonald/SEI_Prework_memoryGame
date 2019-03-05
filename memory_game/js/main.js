// Array containing each stored card as an object
cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "./images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "./images/queen-of-hearts.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "./images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "./images/king-of-diamonds.png"
	}
];



// Shuffle function (Work in progress)
let shuffleCards = function() {
	console.log('shuffling cards');
}


// Score counter
let score = 0;
let scoreIncrease = function() {
	score += 1;
	// console.log('Score is:' + score);
	document.getElementById('scoreCount').innerHTML = "Score = " + score;
}


// Create a new board by looping through and setting attributes
let createBoard = function() {
	for (i=0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', './images/back.png');
		cardElement.setAttribute('data-id', i)
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}


// Empty array where cards will be pushed to
cardsInPlay = [];


let checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You found a match!');
			scoreIncrease();
		}
		else {
			alert('Sorry, try again.');
		}
	}
}


// Need to change to only push unique card clicks
let flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	

	cardsInPlay.push(cards[cardId].rank);
	

	console.log('User flipped: ' + cards[cardId].rank);
	console.log('Img: ' + cards[cardId].cardImage);
	console.log('Suit: ' + cards[cardId].suit);
	console.log('Id: ' + cardId);
	console.log(cardsInPlay);
	checkForMatch();
}

createBoard();



let resetBoard = function() {
	for (i=0; i < cards.length; i++) {
		document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
	};
	cardsInPlay = []; //empty out the array of cards in play
}


// Reset button
var button = document.getElementById('resetButton');
button.addEventListener('click', resetBoard);



