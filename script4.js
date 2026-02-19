/* russin roulette?
*/

function getBullet () {
    let randomNumber = Math.floor(Math.random () *7);
    return randomNumber
}

function getPlayerFate () {
    let userInput = prompt("Only one bullet in the chamber, choose wisely... 0-6");
    return Number(userInput);
}

function spinTheBarrell() {
    let live = 0;
    let die = 0;
    for (let round = 1; round <= 5; round++) {
        console.log("Round: " + round);
        let playerFate = getPlayerFate();
        let bullet = getBullet();
        if (playerFate === bullet) {
            die++
            return "You're dead!";
        }
        else {
            live++;
            console.log("You've escaped with your life...")
        }
    }
    if (live > die) {
        console.log("You lived... this time...")
    }
    else if (die > live) {
        console.log("You're dead mate!")
    }
    else if (live === die) {
        console.log("Its a tie")
    }
}

spinTheBarrell ();