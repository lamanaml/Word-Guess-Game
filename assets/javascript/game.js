
    //computer selects a dessert randomly-->
    //computer displays "-" to indicate the number of letters in the word


    //This array contains our list of words.
    var desserts = ["Cheesecake","Banana Pudding", "Apple Pie", "Chocolate Cake", "Chocolate Chip Cookies", "Milk Shake"];
    var guesses = 0
    var score = 0
    
    var showScore = document.getElementByID("#score");

    var currentWord = desserts[Math.floor(Math.random() * desserts.length)];

    var answerArray = [];
        for (var i = 0; i < currentWord.length; i++) {
	    answerArray[i] = "_ ";
      document.write(answerArray[i]);
      var remainingLetters = currentWord.length;
     }

     while (remainingLetters > 0) {
         alert(answerArray.join(" "));
         userGuess = prompt("Please guess a letter");
          if (userGuess == null){
            break;
            } 
        
            for (var j = 0; j < currentWord.length; j++){
              if (currentWord[j] === userGuess){
                answerArray[j] = userGuess;
                remainingLetters--;
                score++;
                document.write("remaining letters " +  remainingLetters)
                console.log("remaining letters " +  remainingLetters)
            
        var newScore = document.createElement('div');      
        //newScore.innerHTML = data;
        showScore.appendChild( newScore )

            document.write  ("score " + score);
            console.log ("score " + score);
              }
              
       }
     }
     
 guesses++;


console.log(currentWord);
console.log(currentWord.length);
console.log(userGuess);
console.log("guesses " + guesses);

