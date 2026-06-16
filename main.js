function getComputerChoice() {
    let computerMove;
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber <= 1/3) {
        computerMove = 'Rock';
    } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    return computerMove;
}

function getHumanChoice() {    
    const playerMove = prompt("Rock, Paper, or Scissors?");

    return playerMove;
}

function GamePlay() {
    const winMessage = "You win!";
    const loseMessage = "You lose.";
    const tieMessage = "It's a tie."

    const playerMove = getHumanChoice();
    const computerMove = getComputerChoice();

    if(playerMove === computerMove) {
        console.log(`You chose ${playerMove} and the Computer chose ${computerMove}. ${tieMessage}`);
    } else if (playerMove === 'Rock' && computerMove === 'Paper') {
        console.log(`You chose ${playerMove} and the Computer chose ${computerMove}. ${loseMessage}`);
    } else if (playerMove === 'Rock' && computerMove === 'Scissors') {
        console.log(`You chose ${playerMove} and the Computer chose ${computerMove}. ${winMessage}`);
    } else if (playerMove === 'Paper' && computerMove === 'Rock') {
        console.log(`You chose ${playerMove} and the Computer chose ${computerMove}. ${winMessage}`);
    } else if (playerMove === 'Paper' && computerMove === 'Scissors') {
        console.log(`You chose ${playerMove} and the Computer chose ${computerMove}. ${loseMessage}`);
    } else if (playerMove === 'Scissors' && computerMove === 'Rock') {
        console.log(`You chose ${playerMove} and the Computer chose ${computerMove}. ${loseMessage}`);
    } else {
        // Scissors vs Paper
        console.log(`You chose ${playerMove} and the Computer chose ${computerMove}. ${winMessage}`);
    }

    GameReplay();
}

function GameReplay() {
    const replayChoice = confirm ("Do you want to play again?");

    if (replayChoice) {
        GamePlay();
    } else {
        console.log('Let\'s play again some time. Bye Bye!');
    }
}

GamePlay();