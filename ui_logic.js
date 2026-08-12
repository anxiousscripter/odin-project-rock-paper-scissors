const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const result = document.querySelector('.result'); // line of text showing the result
const humanScore = document.querySelector('.human-score'); // actual score like 1 or 0
const computerScore = document.querySelector('.computer-score'); // actual score like 1 or 0

function getComputerChoice() {
	const randomNumber = Math.random();
	let computerChoice = '';

	if (randomNumber >= 0 && randomNumber <= 1 / 3) {
		computerChoice = 'rock';
	} else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
		computerChoice = 'paper';
	} else {
		computerChoice = 'scissors';
	}

	return computerChoice;
}

function playGame() {
	let numbHumanScore = 0;
	let numbComputerScore = 0;

	function playRound(humanChoice, computerChoice) {
		const winMessage = 'You won!';
		const loseMessage = 'You lost.';
		const tieMessage = "It's a tie.";

		if (humanChoice === computerChoice) {
			result.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${tieMessage}`;
			humanScore.textContent = String(numbHumanScore);
			computerScore.textContent = String(numbComputerScore);
		} else if (humanChoice === 'rock' && computerChoice === 'paper') {
			result.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${loseMessage}`;
			numbComputerScore++;
			humanScore.textContent = String(numbHumanScore);
			computerScore.textContent = String(numbComputerScore);
		} else if (humanChoice === 'rock' && computerChoice === 'scissors') {
			result.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${winMessage}`;
			numbHumanScore++;
			humanScore.textContent = String(numbHumanScore);
			computerScore.textContent = String(numbComputerScore);
		} else if (humanChoice === 'paper' && computerChoice === 'rock') {
			result.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${winMessage}`;
			numbHumanScore++;
			humanScore.textContent = String(numbHumanScore);
			computerScore.textContent = String(numbComputerScore);
		} else if (humanChoice === 'paper' && computerChoice === 'scissors') {
			result.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${loseMessage}`;
			numbComputerScore++;
			humanScore.textContent = String(numbHumanScore);
			computerScore.textContent = String(numbComputerScore);
		} else if (humanChoice === 'scissors' && computerChoice === 'rock') {
			result.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${loseMessage}`;
			numbComputerScore++;
			humanScore.textContent = String(numbHumanScore);
			computerScore.textContent = String(numbComputerScore);
		} else {
			// scissors vs paper
			result.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${winMessage}`;
			numbHumanScore++;
			humanScore.textContent = String(numbHumanScore);
			computerScore.textContent = String(numbComputerScore);
		}
	}

	rock.addEventListener('click', () => {
		let humanChoice = 'rock';
		playRound(humanChoice, getComputerChoice());
		// rock.setAttribute('style', 'background-color: yellow;');
	});
	paper.addEventListener('click', () => {
		let humanChoice = 'paper';
		playRound(humanChoice, getComputerChoice());
	});
	scissors.addEventListener('click', () => {
		let humanChoice = 'scissors';
		playRound(humanChoice, getComputerChoice());
	});
}

function resetScore() {}

playGame();

// Add logic for game end once player gets to 5 points
// Add logic for score reset
