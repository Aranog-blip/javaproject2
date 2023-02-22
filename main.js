let i = 0;
let k = 0;
let n = 0;
let compGuess = ["ROCK", "PAPER", "SCISSORS"];
let userChoice = ["ROCK", "PAPER", "SCISSORS"];
let randomChoice = ["ROCK", "PAPER", "SCISSORS"];      


const rocky = document.getElementById('ROCK');
const papery = document.getElementById('PAPER');
const scissorsy = document.getElementById('SCISSORS');

scissorsy.addEventListener('click',choiceScissors);
papery.addEventListener('click',choicePaper);   
rocky.addEventListener('click',choiceRock);



function choiceRock (){ 
    n++;
    document.getElementById('screen').innerHTML += ("ROUND  " + n) + '<br>';
   
    let userChoice = 'ROCK'
    document.getElementById('screen').innerHTML += "USER CHOOSES: " + userChoice + "!" + '<br>';
    let randomChoice = Math.floor(Math.random()*compGuess.length);
    document.getElementById('screen').innerHTML += "COMPUTER CHOOSES: " + compGuess[randomChoice]+ "!" + '<br>';
    if (userChoice == compGuess[randomChoice]) {
        document.getElementById('screen').innerHTML += ("IT'S A DRAW!") + "<br>";
    
    
    }else if (userChoice == compGuess[0] && compGuess[randomChoice] == compGuess[2]){
        i++;
        document.getElementById('screen').innerHTML += ("YOU WON!") + "<br>";
        
    
    }else if (userChoice == compGuess[1] && compGuess[randomChoice] == compGuess[0]){
         i++;
         document.getElementById('screen').innerHTML += ("YOU WON!") + "<br>";
    
    }else if (userChoice == compGuess[2] && compGuess[randomChoice] == compGuess[1]){
        i++;
        document.getElementById('screen').innerHTML += ("YOU WON!") + "<br>";
    
    
    }else if (userChoice == compGuess[0] && compGuess[randomChoice] == compGuess[1]){
        k++;
        document.getElementById('screen').innerHTML += ("YOU LOST!") + "<br>";
    
    }else if (userChoice == compGuess[1] && compGuess[randomChoice] == compGuess[2]){
        k++;
        document.getElementById('screen').innerHTML += ("YOU LOST!") + "<br>";
    
    }else if (userChoice == compGuess[2] && compGuess[randomChoice] == compGuess[0]){
        k++;
        document.getElementById('screen').innerHTML += ("YOU LOST!") + "<br>";
    
    }
    document.getElementById('results').innerHTML = ("USER:  " + i) + "<br>" + ("COMPUTER:  " + k) + "<br>";
    
    if (i == 3){
        document.getElementById('screen').innerHTML += ("USER WON! NEW ROUND?") + "<br>";
        i = 0;
        k = 0;
        n = 0; 
    }else if (k == 3){
        document.getElementById('screen').innerHTML += (" COMPUTER WON! NEW ROUND?") + "<br>";
        i = 0;
        k = 0;
        n = 0;
    } 
}


function choicePaper (){ 
    
    n++;
    document.getElementById('screen').innerHTML += ("ROUND  " + n) + '<br>';
    

    let userChoice = 'PAPER'
    document.getElementById('screen').innerHTML += "USER CHOOSES: " + userChoice + "!" + '<br>';
    let randomChoice = Math.floor(Math.random()*compGuess.length);
    document.getElementById('screen').innerHTML += "COMPUTER CHOOSES: " + compGuess[randomChoice]+ "!" + '<br>';
    if (userChoice == compGuess[randomChoice]) {
        document.getElementById('screen').innerHTML += ("IT'S A DRAW!") + "<br>";
    
    
    }else if (userChoice == compGuess[0] && compGuess[randomChoice] == compGuess[2]){
        i++;
        document.getElementById('screen').innerHTML += ("YOU WON!") + "<br>";
        
    
    }else if (userChoice == compGuess[1] && compGuess[randomChoice] == compGuess[0]){
         i++;
         document.getElementById('screen').innerHTML += ("YOU WON!") + "<br>";
    
    }else if (userChoice == compGuess[2] && compGuess[randomChoice] == compGuess[1]){
        i++;
        document.getElementById('screen').innerHTML += ("YOU WON!") + "<br>";
    
    
    }else if (userChoice == compGuess[0] && compGuess[randomChoice] == compGuess[1]){
        k++;
        document.getElementById('screen').innerHTML += ("YOU LOST!") + "<br>";
    
    }else if (userChoice == compGuess[1] && compGuess[randomChoice] == compGuess[2]){
        k++;
        document.getElementById('screen').innerHTML += ("YOU LOST!") + "<br>";
    
    }else if (userChoice == compGuess[2] && compGuess[randomChoice] == compGuess[0]){
        k++;
        document.getElementById('screen').innerHTML += ("YOU LOST!") + "<br>";
    
    }
    document.getElementById('results').innerHTML = ("USER:  " + i) + "<br>" + ("COMPUTER:  " + k) + "<br>";
    
    if (i == 3){
        document.getElementById('screen').innerHTML += ("USER WON! NEW ROUND?") + "<br>";
        i = 0;
        k = 0;
        n = 0; 
    }else if (k == 3){
        document.getElementById('screen').innerHTML += (" COMPUTER WON! NEW ROUND?") + "<br>";
        i = 0;
        k = 0;
        n = 0;
    } 
   
}
  

function choiceScissors (){ 
    n++;
    document.getElementById('screen').innerHTML += ("ROUND  " + n) + '<br>';

    let userChoice = "SCISSORS"
    document.getElementById('screen').innerHTML += "USER CHOOSES: " + userChoice + "!" + '<br>';
    let randomChoice = Math.floor(Math.random()*compGuess.length);
    document.getElementById('screen').innerHTML += "COMPUTER CHOOSES: " + compGuess[randomChoice]+ "!" + '<br>';
    
    
    if (userChoice == compGuess[randomChoice]) {
        document.getElementById('screen').innerHTML += ("IT'S A DRAW!") + "<br>";
    
    
    }else if (userChoice == compGuess[0] && compGuess[randomChoice] == compGuess[2]){
        i++;
        document.getElementById('screen').innerHTML += ("YOU WON!") + "<br>";
        
    
    }else if (userChoice == compGuess[1] && compGuess[randomChoice] == compGuess[0]){
         i++;
         document.getElementById('screen').innerHTML += ("YOU WON!") + "<br>";
    
    }else if (userChoice == compGuess[2] && compGuess[randomChoice] == compGuess[1]){
        i++;
        document.getElementById('screen').innerHTML += ("YOU WON!") + "<br>";
    
    
    }else if (userChoice == compGuess[0] && compGuess[randomChoice] == compGuess[1]){
        k++;
        document.getElementById('screen').innerHTML += ("YOU LOST!") + "<br>";
    
    }else if (userChoice == compGuess[1] && compGuess[randomChoice] == compGuess[2]){
        k++;
        document.getElementById('screen').innerHTML += ("YOU LOST!") + "<br>";
    
    }else if (userChoice == compGuess[2] && compGuess[randomChoice] == compGuess[0]){
        k++;
        document.getElementById('screen').innerHTML += ("YOU LOST!") + "<br>";
    
    }
    document.getElementById('results').innerHTML = ("USER:  " + i) + "<br>" + ("COMPUTER:  " + k) + "<br>";
    if (i == 3){
        document.getElementById('screen').innerHTML += ("USER WON! NEW ROUND?") + "<br>";
        i = 0;
        k = 0;
        n = 0; 
    }else if (k == 3){
        document.getElementById('screen').innerHTML += (" COMPUTER WON! NEW ROUND?") + "<br>";
        i = 0;
        k = 0;
        n = 0;
    } 
}









    

        
  

    
        
        
    