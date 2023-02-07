let userChoice = prompt("Choose one: ROCK, PAPER OR SCISSORS!!!");
console.log(userChoice)

let compGuess = ["ROCK", "PAPER", "SCISSORS"];
let randomChoice = Math.floor(Math.random()*compGuess.length);
console.log (compGuess[randomChoice]);


if ((userChoice) == (compGuess[randomChoice])) {
    alert("IT'S A DRAW!");

}else if (userChoice == compGuess[0] && compGuess[randomChoice] == compGuess[2]){
    alert("YOU WON!");

}else if (userChoice == compGuess[1] && compGuess[randomChoice] == compGuess[0]){
    alert("YOU WON!");

}else if (userChoice == compGuess[2] && compGuess[randomChoice] == compGuess[1]){
    alert("YOU WON!");

} else {
    alert("YOU LOST!");
}

