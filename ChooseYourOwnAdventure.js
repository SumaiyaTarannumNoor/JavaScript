const prompt = require("prompt-sync")() //comment out this line while using chrome dev-tools.

const answer = prompt("Do you wanna play? (y/n):")

if(answer.toLowerCase()=='y'){
    const answer2 = prompt("Would you go left or right?")
    if(answer2.toLowerCase()=='left'){
        console.log("You see a jungle.")
        const answer3 = prompt("Wanna go in???(y/n)")
        if(answer3.toLowerCase()=='y'){
            console.log('you see a small cottage.')
            const answer8 = prompt("Wanna go in?(yes/no)")
            if(answer8.toLowerCase()=='yes'){
                console.log("You go in and find a map that shows this house and something behind this house.")
                const answer9 = prompt("Wolud like to find that something behind the house?(yes/no)")
                if(answer9.toLowerCase()=='yes'){
                    console.log("You find a grave.")
                    const answer10 = prompt("You realised someone was murdered. Do wanna find?(of course/hell no)")
                    if(answer10.toLowerCase()=='of course'){
                        console.log("You get out of the jungle in the direction you came in.")
                    }
                    else{
                        console.log("You get out of the jungle in the direction you came in.")
                    }
                }
                else{
                    console.log("You run out of the house to the direction where you came from.")
                }
            }
        }
        else{
            console.log("Wait for the but till 2:30 am. :)")
        }
    }
    else{
        console.log("You see an abandoned building.")
        const answer4= prompt("Let's go there? (y/n)")
        if(answer4.toLowerCase()=='y'){
            console.log("You get greeted by a boy.")
            const answer5 = prompt("Wanna talk to the boy?(y/n)")
            if(answer5.toLowerCase()=='y'){
                console.log("He bleeds out of his mouth while talking.")
                const answer6 = prompt("You know he is not alive. You ask about his death?(y/n)")
                if(answer6.toLowerCase()=='y'){
                    console.log("You learn he was killed in the nearby jungle. His grave is in the jungle. He requests you to go there. will you? (y/n)")
                    const answer7 = prompt("He requests you to go there. will you? (y/n)")
                    if(answer7.toLocaleLowerCase()=='y'){
                        console.log("You go to the jungle.")
                    }
                    else{
                        console.log("You run for your life. :D")
                    }
                }
            }
            else{
                console.log("You run ouside to go home at 10:15 pm. :)")
            }
        }
        else{
            console.log("Take the lonely road to your home at 10:00pm. :)")
        }
    }
}
else{
    console.log("That's bad, man!!1 :" )
}
