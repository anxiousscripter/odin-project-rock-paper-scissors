const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const result = document.querySelector('.result'); // line of text showing the result
const humanScore = document.querySelector('.human-sore'); // actual score like 1 or 0
const computerScore = document.querySelector('.computer-sore'); // actual score like 1 or 0

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
			console.log(
				`You chose ${humanChoice}. Computer chose ${computerChoice}. ${tieMessage}`,
			);
		} else if (humanChoice === 'rock' && computerChoice === 'paper') {
			console.log(
				`You chose ${humanChoice}. Computer chose ${computerChoice}. ${loseMessage}`,
			);
			numbComputerScore++;
		} else if (humanChoice === 'rock' && computerChoice === 'scissors') {
			console.log(
				`You chose ${humanChoice}. Computer chose ${computerChoice}. ${winMessage}`,
			);
			numbHumanScore++;
		} else if (humanChoice === 'paper' && computerChoice === 'rock') {
			console.log(
				`You chose ${humanChoice}. Computer chose ${computerChoice}. ${winMessage}`,
			);
			numbHumanScore++;
		} else if (humanChoice === 'paper' && computerChoice === 'scissors') {
			console.log(
				`You chose ${humanChoice}. Computer chose ${computerChoice}. ${loseMessage}`,
			);
			numbComputerScore++;
		} else if (humanChoice === 'scissors' && computerChoice === 'rock') {
			console.log(
				`You chose ${humanChoice}. Computer chose ${computerChoice}. ${loseMessage}`,
			);
			numbComputerScore++;
		} else {
			// scissors vs paper
			console.log(
				`You chose ${humanChoice}. Computer chose ${computerChoice}. ${winMessage}`,
			);
			numbHumanScore++;
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

playGame();
