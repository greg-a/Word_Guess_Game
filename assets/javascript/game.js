// press any key to start

// push correct guesses to blankAnswer

var wins = 0;
var correctGuesses = [];
var incorrectGuesses = [];
var answers = ["the process", "trust the process", "sam hinkie", "joel embiid", "ben simmons"];
var guessesRemaining = 10;
var computerAnswer = answers[Math.floor(Math.random() * answers.length)];
var blankAnswer = "";
var correctAnswer = [];

function newAnswer() {
    for (var i = 0; i < computerAnswer.length; i++) {
        computerAnswer = computerAnswer.replace(/\s+/g, '');
        correctAnswer.push(computerAnswer[i]);        
        blankAnswer += "_ ";
    }
}

function fillBlank() {
    blankAnswer = "";

    for (var i = 0; i < correctAnswer.length; i++) {
        if (correctGuesses.includes(correctAnswer[i])) {
            blankAnswer += correctAnswer[i];
        }
        else {
            blankAnswer += "_ ";
        }
    }
}


 

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase(); 
    
    

    function checkGuess(letter) {
        return letter !== userGuess;
    }

    
    if (correctAnswer.length === 0) {
        newAnswer();
        document.getElementById("blank-answer").innerHTML = blankAnswer;
    }

    if (incorrectGuesses.every(checkGuess) && (correctGuesses.every(checkGuess))) {

        if (correctAnswer.every(checkGuess) === false) {
            alert("Correct Guess! ");
            correctGuesses.push(userGuess);
            fillBlank(correctGuesses);
            document.getElementById("blank-answer").innerHTML = blankAnswer;
        }
        
        else {
            if (guessesRemaining > 1) {
                guessesRemaining--;
                incorrectGuesses.push(userGuess);
            }
            else {
                correctGuesses.length = 0;
                incorrectGuesses.length = 0;
                correctAnswer.length = 0;
                blankAnswer = "";
                guessesRemaining = 10;                
            }
        }  
    }
      
    console.log("Answer: " + computerAnswer);
    document.getElementById("wrong-guess").innerHTML = "Wrong guesses: " + incorrectGuesses;
    console.log("Wrong Guesses: " + incorrectGuesses);
    console.log("Correct Answer: " + correctAnswer);
    console.log("Guesses Remaining: " + guessesRemaining);

}




