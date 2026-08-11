// function getComputerChoice() {
//     const randomNumber = Math.random();

//     if (randomNumber >= 0 && randomNumber <= 1/3) {
//         computerChoice = 'rock';
//     } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
//         computerChoice = 'paper';
//     } else {
//         computerChoice = 'scissors';
//     }

//     return computerChoice;
// }

// function getHumanChoice() {
//     let humanChoice = prompt("rock, paper, or scissors?").toLowerCase().trim();
//     return humanChoice;
// }

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     function playRound(humanChoice, computerChoice) {

//         const winMessage = "You win";
//         const loseMessage = "You lose";
//         const tieMessage = "Well, it's a tie"

//         if(humanChoice === computerChoice) {
//             console.log(`${tieMessage}.`);
//         } else if (humanChoice === 'rock' && computerChoice === 'paper') {
//             console.log(`${loseMessage}! ${computerChoice} beats ${humanChoice}.`);
//             computerScore++;
//         } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
//             console.log(`${winMessage}! ${humanChoice} beats ${computerChoice}.`);
//             humanScore++;
//         } else if (humanChoice === 'paper' && computerChoice === 'rock') {
//             console.log(`${winMessage}! ${humanChoice} beats ${computerChoice}.`);
//             humanScore++;
//         } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
//             console.log(`${loseMessage}! ${computerChoice} beats ${humanChoice}.`);
//             computerScore++;
//         } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
//             console.log(`${loseMessage}! ${computerChoice} beats ${humanChoice}.`);
//             computerScore++;
//         } else {
//             // scissors vs paper
//             console.log(`${winMessage}! ${humanChoice} beats ${computerChoice}.`);
//             humanScore++;
//         }

//         console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
//     }

//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());

//     console.log("\nFinal Score:");
//     console.log(`Human: ${humanScore}`);
//     console.log(`Computer: ${computerScore}`);

//     if (humanScore > computerScore) {
//         console.log("You won the game!");
//     } else if (computerScore > humanScore) {
//         console.log("The computer won the game!");
//     } else {
//         console.log("The game ended in a tie!");
//     }
// }

// playGame();
