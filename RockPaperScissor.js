const prompt = require("prompt-sync")()

let playerWins = 0;
let computerWins = 0
let ties = 0;

let tries = 0;

while(tries < 6){
        const playerChoice = prompt("Enter Rock/paper/Scissors: ")

        if(playerChoice.toUpperCase() == "Rock" || "PAPER" || "SCISSORS"){
             console.log(playerChoice.toUpperCase())
             tries++;
        }
        else{
             console.log("Enter a valid choice.")
        }

        const choices = ["ROCK", 'PAPER', 'SCISSORS']

        const randomIndex = (Math.round(Math.random()*2))

        const computerChoice = choices[randomIndex]

        console.log("The computer chose: "+ computerChoice)

        if (computerChoice == playerChoice){
                ties++
                console.log("DRAW GAME! SCORE: " + ties)
        }
        else if
               ((playerChoice == "PAPER" && computerChoice == "ROCK") ||
               (playerChoice == "ROCK" && computerChoice == "SCISSORS") ||
               (playerChoice == "SCISSORS" && computerChoice == "PAPER"))
               {
                playerWins++;
                
               
        }
        
        else

         {
            computerWins++;
           
            
        }
        
}

if(playerWins>computerWins){
        console.log("Player is the winner with " + playerWins + " score.")
}                
else{
        console.log("Computer is the winner with " + computerWins + " score." )
}      
                     
     


