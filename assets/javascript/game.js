//
var letterBank =[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Set wins to 0, losses to 0, guesses to 9, 
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var currentGuesses = [];
var userGuess = null;
var computerGuess = letterBank[Math.floor(Math.random()*letterBank.length)];
console.log("Wins: " + wins );
console.log("Losses: " + losses );
console.log("guessesRemaining: " + guessesRemaining);
console.log("currentGuesses: " + currentGuesses);
console.log("computerGuess: " + computerGuess);

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	if (currentGuesses.indexOf(userGuess) < 0 && letterBank.indexOf(userGuess) >= 0) {
		currentGuesses[currentGuesses.length] = userGuess;
		guessesRemaining--;
	}
	if (computerGuess == userGuess) {
		wins++;
		console.log("You win!");
		guessesRemaining = 9;
		currentGuesses = [];
		computerGuess = letterBank[Math.floor(Math.random()*letterBank.length)];
		console.log("Wins: " + wins);
		console.log("Losses: " + losses);
		console.log("guessesRemaining: " + guessesRemaining);
		console.log("currentGuesses: " + currentGuesses);
		console.log("computerGuess: " + computerGuess);

	}
	if (currentGuesses == 0) {
		losses++;
		console.log("You lose!");
		guessesRemaining = 9;
		currentGuesses = [];
		computerGuess = letterBank[Math.floor(Math.random()*letterBank.length)];
		
	}

var html = "<p><h1>Guess what letter I\'m thinking of</h1></p>" + 
"<p><h2>Wins: " + wins + "</h2></p>" + 
"<p><h3>Losses: " + losses + "</h3></p>" + 
"<p><h4>Guesses Remaining: " + currentGuesses + 
"</h4></p>" + 
"<p><h5>Your guesses so far: " + 
guessesRemaining + "</h5></p>";
document.querySelector("#game").innerHTML = html;
}