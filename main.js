let compGuess = ["ROCK", "PAPER", "SCISSORS"];

let randomChoice = Math.floor(Math.random()*compGuess.length);

console.log (compGuess[randomChoice]);

let userChoice = prompt("Choose one: ROCK, PAPER OR SCISSORS!!!");
console.log(userChoice)
