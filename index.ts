import inquirer from "inquirer";

let generateNumber = Math.floor(Math.random()*10);
let answer:{
    userGuess: number
} = await inquirer.prompt({
    type: "number",
    message: "Guess a number between 0 and 10",
    name: "userGuess"
})
if(answer.userGuess === generateNumber){
    console.log("Conguratulations you guessed right")
}
else{
    console.log(`Try Again! Correct number was ${generateNumber}`)
}