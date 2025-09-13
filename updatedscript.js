const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");

rockbtn.addEventListener("click", () => playGame(1));

paperbtn.addEventListener("click", () => playGame(2));

scissorsbtn.addEventListener("click", () => playGame(3));

// Initialization of variables to keep track of scores
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Play game logic
function playGame(humanSelection) {
    roundsPlayed++;
    const computerSelection = getComputerChoice();
    displayComputerChoice(computerSelection);
    playRound(humanSelection, computerSelection, roundsPlayed);
    displayScores(roundsPlayed);
    displayWinner();
}

// CHANGE INTO DOM. Function to acquire the computer choice. Returns INT.
function getComputerChoice() {
    let choice;
    choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

function displayComputerChoice(choice) {
    const computerChoiceDisplay = document.querySelector("#computer-choice");

    if (choice == 1) {
        computerChoiceDisplay.textContent = "Computer has chosen ROCK!";
    }
    if (choice == 2) {
        computerChoiceDisplay.textContent = "Computer has chosen PAPER!";
    }
    if (choice == 3) {
        computerChoiceDisplay.textContent = "Computer has chosen SCISSORS!";
    }
}

function playRound(humanChoice, computerChoice, roundsPlayed) {
    const gameContainer = document.querySelector("#play-round");

    // Create the round header only if it doesn't exist yet
    let roundHeader = gameContainer.querySelector("h2");
    if (!roundHeader) {
        roundHeader = document.createElement("h2");
        roundHeader.textContent = `Round ${roundsPlayed} analysis`;
        gameContainer.appendChild(roundHeader);
    } else {
        // Update the header with the current round number
        roundHeader.textContent = `Round ${roundsPlayed} analysis`;
    }
    roundHeader.classList.add("styled-header");
    // Find or create the message paragraph
    let contextParagraph = gameContainer.querySelector("p");
    if (!contextParagraph) {
        contextParagraph = document.createElement("p");
        gameContainer.appendChild(contextParagraph);
    }

    // Paragraph context logic
    if (humanChoice == 1 && computerChoice == 1) {
        message =
            "Looks like you tied! There is no winner. Scores will be kept the same";
    } else if (humanChoice == 1 && computerChoice == 2) {
        message =
            "You lose! Paper beats rock. The computer score will increase.";
        computerScore++;
    } else if (humanChoice == 1 && computerChoice == 3) {
        message =
            "You win! Rock beats scissors. The human score will increase.";
        humanScore++;
    } else if (humanChoice == 2 && computerChoice == 1) {
        message = "You win! Paper beats rock. The human score will increase.";
        humanScore++;
    } else if (humanChoice == 2 && computerChoice == 2) {
        message =
            "Looks like you tied! There is no winner. Scores will be kept the same";
    } else if (humanChoice == 2 && computerChoice == 3) {
        message =
            "You lose! Scissors beats paper. The computer score will increase.";
        computerScore++;
    } else if (humanChoice == 3 && computerChoice == 1) {
        message =
            "You lose! Rock beats scissors. The computer score will increase.";
        computerScore++;
    } else if (humanChoice == 3 && computerChoice == 2) {
        message =
            "You win! Scissors beats paper. The human score will increase.";
        humanScore++;
    } else if (humanChoice == 3 && computerChoice == 3) {
        message =
            "Looks like you tied! There is no winner. Scores will be kept the same";
    }
    contextParagraph.textContent = message;
    contextParagraph.classList.add("styled-text");
    gameContainer.appendChild(contextParagraph);
}

function displayScores(roundsPlayed) {
    const scoreContainer = document.querySelector("#scores");
    // Clear previous scores
    scoreContainer.textContent = "";

    const humanScoreElement = document.createElement("p");
    humanScoreElement.textContent = `Human Score: ${humanScore}`;
    humanScoreElement.classList.add("styled-text");

    const computerScoreElement = document.createElement("p");
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
    computerScoreElement.classList.add("styled-text");

    scoreContainer.appendChild(humanScoreElement);
    scoreContainer.appendChild(computerScoreElement);
}

function displayWinner() {
    let message = "";
    const winnerContainer = document.querySelector("#winner");
    // Clear previous winner
    winnerContainer.textContent = "";

    const winnerLine = document.createElement("p");

    if (humanScore === 5) {
        message = "Congratulations, the player is the winner!";
    } else if (computerScore === 5) {
        message = "Better luck next time, the computer is the winner!";
    }
    winnerLine.textContent = message;
    winnerLine.classList.add("styled-header");
    winnerContainer.appendChild(winnerLine);
}
