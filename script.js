function getComputerChoice() {
    let choice = (Math.floor(Math.random() * 100) % 3) + 1;
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return undefined;
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    return choice;
}

function playGame() {
    let humanScore = 0, computerScore = 0;
    function toNumber(choice) {
        switch (choice) {
            case "rock":
                return 1;
            case "paper":
                return 2;
            case "scissors":
                return 3;
            default:
                return undefined;
        }
    }

    function playRound(humanChoice, computerChoice) {
        humanNumber = toNumber(humanChoice.toLowerCase());
        computerNumber = toNumber(computerChoice);
        
        if (humanNumber == computerNumber) {
            return "Tie! You both got same type";
        }
        if (computerNumber - humanNumber == 1 || (humanNumber == 3 && computerNumber == 1)) {
            computerScore += 1;
            return "You lose! " + computerChoice + " beats " + humanChoice.toLowerCase();
        }
        humanScore += 1;
        return "You win! " + humanChoice.toLowerCase() + " beats " + computerChoice;
    }
    
    for (let i = 1; i <= 5; ++i) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        console.log(result);
    }
    if (humanScore == computerScore) {
        console.log("Tie!");
    }
    else if (humanScore > computerScore) {
        console.log("You win the game!");
    }
    else {
        console.log("You lose the game!");
    }
    console.log("Your score is: " + humanScore + "\nComputer score is: " + computerScore);
}

playGame();
