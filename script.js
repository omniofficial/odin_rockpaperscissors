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
    let choice = prompt(
        "Please enter either (1) for ROCK, (2) for PAPER, or (3) for SCISSORS: "
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;
