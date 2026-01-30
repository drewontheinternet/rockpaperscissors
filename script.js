

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock"
    }
    else if (randomNumber === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}


function getHumanChoice() {
    let answer = prompt("Rock, Paper, or Scissors?");
    console.log(answer);
    answer = answer.toLowerCase().trim();
    return answer;
}




let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Its a tie!"
    }
    if
        (humanChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats scissors."
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats Rock."
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats Paper."
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats Scissors."
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats Rock."
    }
    if (humanChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beats Paper."
    }
}


console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore)

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let round = 1; round <= 5; round++) {
        console.log("Round: " + round);

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let result = playRound(humanChoice, computerChoice);
        console.log(result)

        if (result.includes("You win")) {
            humanScore++;
        }
        else if (result.includes("You lose")) {
            computerScore++
        }
        console.log("Score - Human:", humanScore, "Computer:", computerScore);
    }
    if (humanScore > computerScore) {
        console.log("You won the game!")
    }
    else if (computerScore > humanScore) {
        console.log("You lost, Computer won the game!")
    }
    else {
        console.log("Its a tie!")
    } }





playGame();












