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

    const buttons = document.querySelectorAll(".btn");
    const div = document.createElement("div");
    document.body.appendChild(div);
    buttons.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const humanChoice = event.target.dataset.arg;
            let computerChoice = getComputerChoice();
            div.innerHTML = playRound(humanChoice, computerChoice);
            div.innerHTML += "<br> Your score: " + humanScore + " Opponent score: " + computerScore; 
            if (humanScore == 5) {
                div.innerHTML += "<br> You WON the game!";
                humanScore = 0;
                computerScore = 0;
            }
            else if (computerScore == 5)  {
                div.innerHTML += "<br> YOU LOST the game!";
                humanScore = 0;
                computerScore = 0;
            }
        });
    });
}

playGame();
