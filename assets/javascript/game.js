var wins = 0;
var correctGuesses = [];
var incorrectGuesses = [];
var answers = ["robert covington", "tj mcconnell", "sam hinkie", "joel embiid", "ben simmons", "markelle fultz", "isaiah canaan", "jerami grant", "tony wroten", "mike scott", "brett brown"];
var guessesRemaining = 10;
var blankAnswer = "";
var correctAnswer = [];
var sadPic = document.createElement("img");
var victoryPic = document.createElement("img");

sadPic.src = "assets/images/jah-sad.jpg";

victoryPic.src = "assets/gifs/mjjump.gif";

victoryPic.setAttribute("class", "image");

sadPic.setAttribute("class", "image");

function newAnswer() {

    correctGuesses.length = 0;
    incorrectGuesses.length = 0;
    correctAnswer.length = 0;
    blankAnswer = "";
    guessesRemaining = 10;
    computerAnswer = answers[Math.floor(Math.random() * answers.length)];

    for (var i = 0; i < computerAnswer.length; i++) {
        computerAnswer = computerAnswer.replace(/\s+/g, '');
        correctAnswer.push(computerAnswer[i]);        
        blankAnswer += "_ ";
        document.getElementById("blank-answer").innerHTML = blankAnswer;
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
        document.querySelector(".image").remove();
        document.getElementById("blank-answer").innerHTML = blankAnswer;
    }
    else if (incorrectGuesses.every(checkGuess) && (correctGuesses.every(checkGuess))) {        

        if (correctAnswer.every(checkGuess) === false) {            
            correctGuesses.push(userGuess);
            fillBlank(correctGuesses);
            document.getElementById("blank-answer").innerHTML = blankAnswer;

            if (blankAnswer === computerAnswer) {
                correctAnswer.length = 0;
                document.getElementById("sixer-pics").appendChild(victoryPic);
                document.getElementById("blank-answer").innerHTML = "Press any button to start";
            }
          
        }
        else if (guessesRemaining > 1) {
            guessesRemaining--;
            incorrectGuesses.push(userGuess);
        } 
        else {
            guessesRemaining = 0;
            correctAnswer.length = 0;
            document.getElementById("sixer-pics").appendChild(sadPic); 
            document.getElementById("blank-answer").innerHTML = "Press any button to start"            
        } 
    
        
    }
    
    document.getElementById("letters-guessed").innerHTML = incorrectGuesses;
    document.getElementById("guesses-left").innerHTML = guessesRemaining;

}




