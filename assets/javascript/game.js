
// Have computer guess a-z randomly for Psychic Game:

      var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variables to hold the number of wins, losses, and guesses. They will all start at 0.

      var wins = 0;
      var losses = 0;
      var guessesLeft = 9;
      var guessesSofar = 0;

// This function is run whenever the user presses a key to choose.
 
      document.onkeyup = function(event) {

        var userGuess = event.key;

//  Decide if userGuess same as computerGuess and if it is: note that by adding 1 to the wins variable.  If not equals to then let userGuess again 
//  for a loop of up to 9 tries and add 1 to the guessesSofar variable.  After 9 tries if they don't guess the letter let them know the game is over
//  and they must start game again.  
 
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number:

        if ((userGuess !== computerGuess)) {
            losses++; guessesSofar++; guessesLeft--;
        } 

        if ((userGuess == computerGuess)) {
            wins++; guessesSofar++; guessesLeft--;
        }

        if (guessesLeft == 0) {
            alert("You have guessed 9 times, Game Over, Start New Game");
            location.reload();
        }

               
// Create a variable to hold the HTML. Our HTML now keeps track of the user and computer guesses, wins and losses.
 
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess +"</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" + 
          "<p>Your Guesses So far: " + userGuess + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>"

// Set the inner HTML contents of the game to the html string.

        var myDivContents = document.getElementById("game").innerHTML = html;

        }

      