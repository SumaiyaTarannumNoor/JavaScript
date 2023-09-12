const prompt = require("prompt-sync")() //comment out this line while using chrome dev-tools.

const target = (Math.round(Math.random()*20))


let guesses = 0;

while(guesses<16){
    guesses++ ;
    const guess = Number(prompt("Enter your guess: "))

    if(guess>target){
        console.log("Your guess is too high.")
    }
    else if(guess<target){
        console.log("Your guess is too low.")
    }
    else{
        console.log("Correct Guess")
    break;
    }
}
console.log("You guesses it in "+ guesses + " tries, GOOD!!")
