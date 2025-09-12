const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");

rockbtn.addEventListener("click", () => playGame(1));

paperbtn.addEventListener("click", () => playGame(2));

scissorsbtn.addEventListener("click", () => playGame(3));

// Initialization of variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

// Play game logic
function playGame(humanSelection) {
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    displayScores();
}

// CHANGE INTO DOM. Function to acquire the computer choice. Returns INT.
function getComputerChoice() {
    let choice;
    choice = Math.floor(Math.random() * 3) + 1;

    if (choice == 1) {
        console.log("The computer has chosen ROCK!");
    } else if (choice == 2) {
        console.log("The computer has chosen PAPER!");
    } else if (choice == 3) {
        console.log("The computer has chosen SCISSORS!");
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 1 && computerChoice == 1) {
        console.log(
            "Looks like you tied! There is no winner. Scores will be kept the same"
        );
    } else if (humanChoice == 1 && computerChoice == 2) {
        console.log(
            "You lose! Paper beats rock. The computer score will increase."
        );
        computerScore++;
    } else if (humanChoice == 1 && computerChoice == 3) {
        console.log(
            "You win! Rock beats scissors. The human score will increase."
        );
        humanScore++;
    } else if (humanChoice == 2 && computerChoice == 1) {
        console.log(
            "You win! Paper beats rock. The human score will increase."
        );
        humanScore++;
    } else if (humanChoice == 2 && computerChoice == 2) {
        console.log(
            "Looks like you tied! There is no winner. Scores will be kept the same"
        );
    } else if (humanChoice == 2 && computerChoice == 3) {
        console.log(
            "You lose! Scissors beats paper. The computer score will increase."
        );
        computerScore++;
    } else if (humanChoice == 3 && computerChoice == 1) {
        console.log(
            "You lose! Rock beats scissors. The computer score will increase."
        );
        computerScore++;
    } else if (humanChoice == 3 && computerChoice == 2) {
        console.log(
            "You win! Scissors beats paper. The human score will increase."
        );
        humanScore++;
    } else if (humanChoice == 3 && computerChoice == 3) {
        console.log(
            "Looks like you tied! There is no winner. Scores will be kept the same"
        );
    }
}

function displayScores() {
    console.log("------------- CURRENT SCORES ------------- ");
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

let rounds = 0;

for (let i = 1; i <= rounds; i++) {
    console.log("------------- GAME: " + i + " -------------");
    playGame();
}

if (humanScore < computerScore) {
    console.log("You lose the whole game! The computer has won");
} else if (humanScore > computerScore) {
    console.log("You win the whole game! The computer has lost");
} else if (humanScore == computerScore) {
    console.log("The human and computer have tied!");
}
