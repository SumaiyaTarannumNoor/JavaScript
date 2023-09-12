const prompt = require ("prompt-sync")()
console.log("Welcome to Brain-Eating Quiz!!!!")

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt("What's the color of the sky when we look at it? : ");
const correctAnswer1 = "BLUE";

if (answer1.toUpperCase() == correctAnswer1){
    correctAnswers++ ;
    console.log(answer1.toUpperCase())
    console.log("You won!!!!!!!");
}
else{
    console.log(answer1)
    console.log("You know nothing!! :D")
    console.log(correctAnswer1)
}

const answer2 = prompt("What's the color we use when we want to hide? : ");
const correctAnswer2 = "BLACK";

if (answer2.toUpperCase() == correctAnswer2){
    correctAnswers++ ;
    console.log(answer2.toUpperCase())
    console.log("You won!!!!!!!");
}
else{
    console.log(answer2)
    console.log("You know nothing!! :D")
    console.log(correctAnswer2)
}

const answer3 = prompt("Who are the people who does cliffhangers? : ");
const correctAnswer3 = "ACTORS";

if (answer3.toUpperCase() == correctAnswer3){
    correctAnswers++ ;
    console.log(answer3.toUpperCase())
    console.log("You won!!!!!!!");
}
else{
    console.log(answer3)
    console.log("You know nothing!! :D")
    console.log(correctAnswer3 + " .... As simple as that.")
}

const score = Math.round((correctAnswers/totalQuestions)*100)

console.log("You got", correctAnswers, "correct!!!, Good.")
console.log("Your Score is:"+ score.toString() + "%")