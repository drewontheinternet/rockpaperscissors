

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock"
    }
    else if (randomNumber === 1){
        return "paper"
    }
    else {
        return "scissors"
    }
    
}

function getHumanChoice () {
    let userInput = prompt("Rock, Paper, or Scissors?").toLowerCase().trim();
    return userInput
}




function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log("Round: " + round);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            console.log("Its a tie!")
        }
        else if
            (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log("You win! Rock beats scissors.");
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock");
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats Paper.");
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Rock beats Scissors.");
        }
        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock.");
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats Paper.");
        }
    }
    if (humanScore > computerScore) {
        console.log("You win!")
    }
    else if (humanScore < computerScore) {
        console.log("You lose!")
    }
    else {
        console.log("It's a tie!")
    }
}


playGame ();




