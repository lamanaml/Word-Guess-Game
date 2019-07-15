
    //computer selects a dessert randomly-->
    //computer displays "-" to indicate the number of letters in the word


    //This array contains our list of words.
    var desserts = ["cheesecake","banana pudding", "apple pie", "chocolate cake", "chocolate chip cookies", "milk shake"];
    var guesses = 0
    var score = 0
    

    // select a random word from te desserts array
    var currentWord = desserts[Math.floor(Math.random() * desserts.length)];
    
    // show an underscore for each letter in the current word 
    var answerArray = [];
        for (var i = 0; i < currentWord.length; i++) {
	    answerArray[i] = "_ ";
      document.write(answerArray[i]);
      var remainingLetters = currentWord.length;
     }

    // if there are letters available, prompt the user to enter a letter
     while (remainingLetters > 0) {
         alert(answerArray.join(" "));
         userGuess = prompt("Please guess a letter");
          if (userGuess == null){
            break;
            } 

    // if the user guess = any of the letters in the current word, add the letter in the correct space, decrement the remaining letters, increment the score
      for (var j = 0; j < currentWord.length; j++){
        if (currentWord[j] === userGuess){
          answerArray[j] = userGuess;
          remainingLetters--;
          score++;
          var newScore = document.createElement('p'); 
          newScore.textContent = score
          score.appendChild(newScore); 
       }
     }
     }
 guesses++;



console.log(currentWord);
console.log(currentWord.length);
console.log(userGuess);
console.log("guesses " + guesses);
console.log ("score " + score);