const prompt = require("prompt-sync")() //comment out this line while using chrome dev-tools.

let playerWins = 0;
let computerWins = 0
let ties = 0;

let tries = 0;
console.log("You have 6 tries. Let's Start...")
while(tries <= 6){
        
        const playerChoice = prompt("Enter Rock/Paper/Scissors: ")

        if(playerChoice.toUpperCase() === "ROCK" || playerChoice.toUpperCase() ==="PAPER" || playerChoice.toUpperCase() ==="SCISSORS"){
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

        if (computerChoice === playerChoice){
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
        console.log("Player is the winner with " + (playerWins-ties) + " score.")
}                
else{
        console.log("Computer is the winner with " + (computerWins-ties)+ " score." )
}      
                     
     


