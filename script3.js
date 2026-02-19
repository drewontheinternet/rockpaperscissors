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




let humanScore = 0;
let computerScore = 0;
const score = document.querySelector(".score")

function playGame(humanChoice) {


    const computerChoice = getComputerChoice();

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


    
    score.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
    if (humanScore === 5) {
        score.textContent = "You won the game!"
        resetGame();
        return;
    }
    else if (computerScore === 5) {
       score.textContent = "You lost the game!"
       resetGame();
       return;
    }
}

function resetGame () {
    humanScore = 0
    computerScore = 0;
}

let buttons = document.querySelectorAll(".choice")
buttons.forEach(button => {
    button.addEventListener("click", function (event) {
        const humanChoice = event.currentTarget.textContent;
        playGame(humanChoice);
    })
})









