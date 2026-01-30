/* 
Creating a game of rock paper scissors from scratch,
no outside help. Just pen and paper.
/*

/* 
Step one.. We want to make the computer choose
rock paper or scissors. We will do so by generating
a random value between 0 and 2 using Math.random.
We then want to assign each number value a correlating
string value.
*/

/* 
Step two... Now we want to have the user input a choice.
We want to assign each choice a value (0, 1, 2).
*/

/* 
Step three... we want to keep score so we are going to assign the users
scores as variables.
*/

/* Step three. We want to play a single round. We want to take the two paramaters
and compare them. And we want an outcome to be a win or loss.
*/







function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)


    if (randomNumber === 0) {
        return "rock"
    }
    if (randomNumber === 1) {
        return "paper"
    }
    if (randomNumber === 2) {
        return "scissors"
    }
}

let computerChoice = getComputerChoice();



function getHumanChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?").toLowerCase().trim();
    return userInput;
}

let humanChoice = getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {


    if (humanChoice === computerChoice) {
        return "Its a tie!"
    }
    if
        (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats scissors.";
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock.";
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats Paper.";
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors.";
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock.";
    }
    if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper.";
    }
}
let result = playRound(humanChoice, computerChoice)
console.log(result)
console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore)














