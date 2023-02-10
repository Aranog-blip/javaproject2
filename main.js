let i = 0;
let k = 0;
let n = 0;
console.log("USER:  " + i);
console.log("COMPUTER:  " + k);


while (i<=3 && k<=3){        
    if (i == 3){
        alert("USER WON! NEW ROUND?");
        i = 0;
        k = 0;
        n = 0; 
    }else if (k == 3){
        alert(" COMPUTER WON! NEW ROUND?");
        i = 0;
        k = 0;
        n = 0;
    }else {
        n++;
        alert("ROUND  " + n);

    let userChoice1 = prompt("Choose one: ROCK, PAPER OR SCISSORS!!!");
    let userChoice = userChoice1.toUpperCase();
    console.log(userChoice);
        
    let compGuess = ["ROCK", "PAPER", "SCISSORS"];
    let randomChoice = Math.floor(Math.random()*compGuess.length);
    console.log (compGuess[randomChoice]);
    alert("Computer chose  " + compGuess[randomChoice]);
    
    if (userChoice == compGuess[randomChoice]) {
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
    

    }else if (userChoice == compGuess[0] && compGuess[randomChoice] == compGuess[1]){
        k++;
        alert("YOU LOST!");
    
    }else if (userChoice == compGuess[1] && compGuess[randomChoice] == compGuess[2]){
        k++;
        alert("YOU LOST!");

    }else if (userChoice == compGuess[2] && compGuess[randomChoice] == compGuess[0]){
        k++;
        alert("YOU LOST!");

    }else {
        alert ("Invalid choice! New round will start automaticly. USE ALL UPPERCASE LETTER");
        n--;
    }
    }
console.log("USER:  " + i);
console.log("COMPUTER:  " + k);
}    




