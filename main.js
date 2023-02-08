let i = 0;
let k = 0;

console.log("USER:  " + i);
console.log("COMPUTER:  " + k);

if (i == 3){
    alert("USER WON!")
}else if (k == 3){
    alert(" COMPUTER WON!")
}else {alert("NEW ROUND!")
}
    while (i<3, k<3){

    let userChoice = prompt("Choose one: ROCK, PAPER OR SCISSORS!!!");{
    console.log(userChoice);
    }
    let compGuess = ["ROCK", "PAPER", "SCISSORS"];
    let randomChoice = Math.floor(Math.random()*compGuess.length);
    console.log (compGuess[randomChoice]);
    
    if ((userChoice) == (randomChoice)) {
            alert("IT'S A DRAW!");


    }else if (userChoice == compGuess[0] && compGuess[randomChoice] == compGuess[2]){
            i++;
            alert("YOU WON!");
        

    }else if (userChoice == compGuess[1] && compGuess[randomChoice] == compGuess[0]){
             i++;
            alert("YOU WON!")

    }else if (userChoice == compGuess[2] && compGuess[randomChoice] == compGuess[1]){
            i++;
            alert("YOU WON!");
    

    }else {
            k++;
            alert("YOU LOST!");
    
    }
    console.log("USER:  " + i);
    console.log("COMPUTER:  " + k);
}



