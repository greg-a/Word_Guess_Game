// press any key to start
// show _ for every unguessed letter in answer
// guesses remaining
// letters already guessed
// show correct letters

var wins = 0;
var lettersGuessed = [];
var answers = ["the process", "trust the process", "sam hinkie", "joel embiid", "ben simmons"];
var guessesRemaining = 10;
var computerAnswer = answers[Math.floor(Math.random() * answers.length)];


document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase(); 

    function checkGuess(letter) {
        return letter !== userGuess;
    }

    if (lettersGuessed.every(checkGuess)) {

        if (userGuess === computerAnswer) {
            wins++;
            guessesRemaining = 10;
            guesses.length = 0;
            computerAnswer = options[Math.floor(Math.random() * options.length)];
        }
        else {
            if (guessesRemaining > 1) {
                guessesRemaining--;
                lettersGuessed.push(lettersGuessed);
            }
            else {
                lettersGuessed.length = 0;
                guessesRemaining = 10;
                computerAnswer = answers[Math.floor(Math.random() * answers.length)];
            }
        }  
    }
    
    console.log("Answer: " + computerAnswer);
    console.log("Letters guessed: " + lettersGuessed);


}




