
// global variables
// --------------------------------------
  var desserts = ["cheesecake","banana pudding", "apple pie", "chocolate cake", "chocolate chip cookies", "milk shake"]; 
  
  var numBlanks = 0;
  var answerArray = []; 
  var guessedLetters = []; 

// Game Counters
  var guesses = 0
  var score = 0
  var wins = 0
  var remainingGuesses = 15

function startgame() {
remainingGuesses = 15
answerArray = [];
guessedLetters = []; 

var currentWord = desserts[Math.floor(Math.random() * desserts.length)];



//select a random word from array and display blank spaces
  for (var i = 0; i < currentWord.length; i++) {
    answerArray[i] = "_ ";
    var remainingLetters = currentWord.length;
  }
  document.getElementById("lettersRemaining").innerHTML = answerArray.join("  ");


  console.log(currentWord)



//for all remaining letters  
  if (remainingLetters > 0) {
    document.onkeyup = function(event) {
      var userGuess = event.key;
        for (var j = 0; j < currentWord.length; j++){
        document.getElementById("letterGuessed").innerHTML = userGuess;
    
    //match user guess to letter array and replace answer array with use guess
      if (currentWord[j] !== userGuess){
        guessedLetters.push(userGuess)
        document.getElementById("letterGuessed").innerHTML = guessedLetters;
        document.getElementById("guessesRemaining").innerHTML = remainingGuesses; 
        remainingGuesses--;
        console.log(remainingGuesses)
        console.log(guessedLetters)
      } 
      else {
        answerArray[j] = userGuess
        document.getElementById("lettersRemaining").innerHTML = answerArray.join("  ");
        remainingGuesses = remainingGuesses
        //score++;
        //document.getElementById("yourScore").innerHTML = score;
        } 
        
    if (remainingLetters === 0){
      alert("OMG!!! You guessed it!")
      console.log(remainingLetters)
      wins++
    }
    if (remainingGuesses === 0 ) {
      alert("Sorry, you lose! Press any key to start over")
    }

    
    }
  }
    
}
  }
    startgame()

    // Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
  // Check if the key pressed is a letter.
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    // Converts all key clicks to lowercase letters.
    var letterGuessed = event.key.toLowerCase();
    // Runs the code to check for correctness.
    //checkLetters(letterGuessed);
    // Runs the code after each round is done.
    //roundComplete();
  }
};
