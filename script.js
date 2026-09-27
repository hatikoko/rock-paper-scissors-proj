function getComputerChoice() {
    let choice = (Math.floor(Math.random() * 100) % 3) + 1;
    console.log(choice);
    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
}

console.log(getHumanChoice());