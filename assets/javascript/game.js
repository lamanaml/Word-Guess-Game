
// global variables
// --------------------------------------
  var desserts = ["cheesecake","banana pudding", "apple pie", "chocolate cake", "chocolate chip cookies", "milk shake"]; // word array
  var guesses = 0
  var score = 0
  var remainingGuesses = 15
  var currentWord = desserts[Math.floor(Math.random() * desserts.length)];
  console.log(currentWord)
  var answerArray = []; 
  
  
//select a random word from array
for (var i = 0; i < currentWord.length; i++) {
  answerArray[i] = "_ ";
  var remainingLetters = currentWord.length;
}
document.getElementById("lettersRemaining").innerHTML = answerArray.join("  ");
//for all remaining letters  
if (remainingLetters > 0) {
  

  for (var j = 0; j < currentWord.length; j++){
    document.onkeyup = function(event) {
    var userGuess = event.key;
    document.getElementById("letterGuessed").innerHTML = userGuess;
    remainingGuesses--;
    document.getElementById("guessesRemaining").innerHTML = remainingGuesses;
      if (remainingGuesses == 0 ) {
        alert("Sorry, you lose! Press any key to start over")

      }
  }
        //match user guess to letter array and replace answer array with use guess
      if (currentWord[j] === "userGuess"){
        answerArray[j] = userGuess
        document.getElementById("lettersRemaining").innerHTML = answerArray.join("  ");
        score++;
        document.getElementById("yourScore").innerHTML = score;   
      }
    }
}


