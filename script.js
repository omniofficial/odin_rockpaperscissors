// Initialization of variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    displayScores();
}

// Function to acquire the computer choice. Returns INT.
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

// Function to acquire the computer choice. Returns INT.
function getHumanChoice() {
    let choice = parseInt(
        prompt(
            "Please enter either (1) for ROCK, (2) for PAPER, or (3) for SCISSORS: "
        )
    );

    if (choice == 1) {
        console.log("You have chosen ROCK!");
    } else if (choice == 2) {
        console.log("You have chosen PAPER!");
    } else if (choice == 3) {
        console.log("You have chosen SCISSORS!");
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

for (let i = 1; i <= 5; i++) {
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
