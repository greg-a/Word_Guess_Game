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
    var correctAnswer = [];

    function checkGuess(letter) {
        return letter !== userGuess;
    }

    for (var i = 0; i < computerAnswer.length; i++) {
        correctAnswer.push(computerAnswer[i]);
    }

    if (lettersGuessed.every(checkGuess)) {

        if (correctAnswer.every(checkGuess) === false) {
            alert("Correct Guess!");
            lettersGuessed.push(userGuess);
        }
        else {
            if (guessesRemaining > 1) {
                guessesRemaining--;
                lettersGuessed.push(userGuess);
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
    console.log("Correct Answer: " + correctAnswer);
    console.log("Guesses Remaining: " + guessesRemaining);

}




