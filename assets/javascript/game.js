
// global variables
// --------------------------------------
  var desserts = ["cheesecake","banana pudding", "apple pie", "chocolate cake", "chocolate chip cookies", "milk shake"]; // word array
  var guesses = 0
  var score = 0
  var remainingGuesses = 15
  var currentWord = desserts[Math.floor(Math.random() * desserts.length)];
  console.log(currentWord)
  var answerArray = []; 
  


//************************************************** */
for (var i = 0; i < currentWord.length; i++) {
  answerArray[i] = "_ ";
  var remainingLetters = currentWord.length;
}

//write variables to html
 
 document.getElementById("guessesRemaining").innerHTML = remainingGuesses;
 document.getElementById("yourScore").innerHTML = score;

  
if (remainingLetters > 0) {
  document.getElementById("lettersRemaining").innerHTML = answerArray.join("  ");

  for (var j = 0; j < currentWord.length; j++){
    document.onkeyup = function(event) {
    var userGuess = event.key;
    document.getElementById("letterGuessed").innerHTML = userGuess;
        
      if (currentWord[j] === "userGuess"){
        answerArray[j] = userGuess
        console.log(currentWord[j])
        console.log(answerArray[j])
        alert("yay")
        remainingLetters--;
        score++;


       

          
        // var newScore = document.createElement('div'); 
        // newScore.textContent = score
        // score.appendChild(newScore); 
      }
    }
  }
}
      else{
        alert("You Win!!");
      }
