
// This function runs as soon as the page is loaded.
$(document).ready(function() {
	// global variables
	var character = ['JOHN-SNOW','ARIA-STARK','THEON-GREYJOY'];
	var dashes = [];
	var wrongGuesses = [];
	var letterIsCorrect = true;
	var userGuess;
	var availableChars = 'ABCDEFGHIJKLMNOPQRSTVWXYZ'.split('');

	// game counters
	var wins = 0;
	var looses = 0;
	var guessesLeft = 9;
	$('#guessesLeft').html(guessesLeft);
	$('#wrongGuesses').html(wrongGuesses);
	$('#wins').html(wins);
	$('#looses').html(looses);

	startGame();

// this function starts the game and does all the logic nedded
function startGame() {
	// Select a random word from the character array
	var randomWord = character[Math.floor(Math.random()*character.length)];

	// Split the word into letters and push it to an empty array.
	var hiddenWord = randomWord.split('');

		// This is what replaces the randomWord inside the empty array hiddenWord
		for (var i=0; i<randomWord.length; i++) {
			if (randomWord[i]==='-') {
				dashes[i] = '- ';
			} else {
				dashes[i] = "_ ";
			}
		}
	// updating the html to show the hidden word as dashes
	$('#hiddenWord').append(dashes);

	// Functions that listens everytime a key is pressed but doesn't register until the finger is lifted off
	$(document).keyup(function(event) {

		userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		checkLetters(userGuess);
	});
}
// this function checks that the user does not use any other characters than letters;
function checkLetters(letter) {
	// check if letter exists in word at all
	var isLetterInWord = false;
	for (var i=0; i<hiddenWord.length; i++) {
		if (hiddenWord[i]===letter) {
			isLetterInWord= true;
			console.log('Letter found');
		}
	}

	if (isLetterInWord) {
		// check where in the word the letter exists
		for (i=0; i<hiddenWord.length; i++) {
			if(hiddenWord[i]===letter) {
				dashes[i] = letter;

			}
		}
		$('#hiddenWord').html(dashes);
	} else {
		wrongGuesses.push(letter+' ');
		guessesLeft--;
		$('#guessesLeft').html(guessesLeft);
		$('#wrongGuesses').html(wrongGuesses);
	}
}

function roundComplete() {
	// Check if the user has won or lost
}

});

