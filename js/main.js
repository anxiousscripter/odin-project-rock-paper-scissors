const wrapper = document.querySelector('.wrapper');
const subtext = document.querySelector('.subtext');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const result = document.querySelector('.result');
const humanScore = document.querySelector('.human-score');
const computerScore = document.querySelector('.computer-score');

const playAgain = document.createElement('button');
playAgain.textContent = 'Play Again';
playAgain.classList.add('btn-play-again');

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
			numbComputerScore++;
			result.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${loseMessage}`;
			humanScore.textContent = String(numbHumanScore);
			computerScore.textContent = String(numbComputerScore);
		} else if (humanChoice === 'rock' && computerChoice === 'scissors') {
			numbHumanScore++;
			result.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${winMessage}`;
			humanScore.textContent = String(numbHumanScore);
			computerScore.textContent = String(numbComputerScore);
		} else if (humanChoice === 'paper' && computerChoice === 'rock') {
			numbHumanScore++;
			result.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${winMessage}`;
			humanScore.textContent = String(numbHumanScore);
			computerScore.textContent = String(numbComputerScore);
		} else if (humanChoice === 'paper' && computerChoice === 'scissors') {
			numbComputerScore++;
			result.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${loseMessage}`;
			humanScore.textContent = String(numbHumanScore);
			computerScore.textContent = String(numbComputerScore);
		} else if (humanChoice === 'scissors' && computerChoice === 'rock') {
			numbComputerScore++;
			result.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${loseMessage}`;
			humanScore.textContent = String(numbHumanScore);
			computerScore.textContent = String(numbComputerScore);
		} else {
			// scissors vs paper
			numbHumanScore++;
			result.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${winMessage}`;
			humanScore.textContent = String(numbHumanScore);
			computerScore.textContent = String(numbComputerScore);
		}

		if (numbHumanScore >= 5 || numbComputerScore >= 5) {
			if (numbHumanScore >= 5) {
				subtext.textContent = 'Game Over! You won the game!';
			} else {
				subtext.textContent = 'Game Over! The computer won the game.';
			}

			rock.disabled = true;
			paper.disabled = true;
			scissors.disabled = true;

			rock.setAttribute(
				'style',
				'background-color: dimgrey; cursor: default;',
			);
			paper.setAttribute(
				'style',
				'background-color: dimgrey; cursor: default;',
			);
			scissors.setAttribute(
				'style',
				'background-color: dimgrey; cursor: default;',
			);

			wrapper.appendChild(playAgain);
		}
	}

	rock.addEventListener('click', () => {
		playRound('rock', getComputerChoice());
	});
	paper.addEventListener('click', () => {
		playRound('paper', getComputerChoice());
	});
	scissors.addEventListener('click', () => {
		playRound('scissors', getComputerChoice());
	});

	playAgain.addEventListener('click', () => {
		numbHumanScore = 0;
		numbComputerScore = 0;

		subtext.textContent = subtext.dataset.default;

		rock.setAttribute('style', 'background-color: ; cursor: ;');
		paper.setAttribute('style', 'background-color: ; cursor: ;');
		scissors.setAttribute('style', 'background-color: ; cursor: ;');

		result.textContent = result.dataset.default;
		humanScore.textContent = humanScore.dataset.default;
		computerScore.textContent = computerScore.dataset.default;

		rock.disabled = false;
		paper.disabled = false;
		scissors.disabled = false;

		playAgain.remove();
	});
}

playGame();
