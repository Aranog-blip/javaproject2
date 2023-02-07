let userChoice = prompt("Choose one: ROCK, PAPER OR SCISSORS!!!");
console.log(userChoice)

let compGuess = ["ROCK", "PAPER", "SCISSORS"];
let randomChoice = Math.floor(Math.random()*compGuess.length);
console.log (compGuess[randomChoice]);




if ((userChoice) == (compGuess[randomChoice])){
    alert("IT'S A DRAW!");
}else if ((((userChoice = "ROCK") && (compGuess[randomChoice] = "SCISSORS")) || ((userChoice = "PAPER") && (compGuess[randomChoice] = "ROCK"))) || ((userChoice = "SCISSORS") && (compGuess[randomChoice] = "PAPER"))){
    alert("YOU WON!");
} else {
    alert("YOU LOST!");
}

