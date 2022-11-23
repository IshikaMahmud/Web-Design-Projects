var numberOfWon = 0;
var numberOfLost = 0;
for (x = 1; x <= 5; x = x + 1) {
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    if (guessNumber == randomNumber) {
        console.log("Congratulation Winner!!!!");
        numberOfWon = numberOfWon + 1;
    }
    else {
        console.log("Sorry!!!! You have lost the game! Try again. Btw, the random number was " + randomNumber);
        numberOfLost = numberOfLost + 1;
    }
}
document.write("Total Number of Won = " + numberOfWon + "<br>");
document.write("Total Number of Lost = " + numberOfLost + "<br>");