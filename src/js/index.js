const gameElement = document.getElementById('game');
const resultPlayerElement = document.getElementById('result-player');
const resultPcElement = document.getElementById('result-pc');
const textResultElement = document.getElementById('text-result');
const gameResultsElement = document.getElementById('game-results');
const playerScoreElement = document.getElementById('player-score');
const pcScoreElement = document.getElementById('pc-score');
const sectionElement = document.getElementById('section');
const playAgainButtonElement = document.getElementById('play-again');

const playerImageResultElement = document.getElementById('player-image-result');
const pcImageResultElement = document.getElementById('pc-image-result');

const gameOptions = ['rock', 'paper', 'scissors'];

const gameRules = {
	paper: {
		rock: true,
		scissors: false,
		lizard: false,
		spock: true
	},
	rock: {
		scissors: true,
		paper: false,
		lizard: true,
		spock: false
	},
	scissors: {
		paper: true,
		rock: false,
		lizard: true,
		spock: false
	},
	lizard: {
		paper: true,
		rock: false,
		scissors: false,
		spock: true
	},
	spock: {
		paper: false,
		rock: true,
		lizard: false,
		scissors: true
	}
};

const gameImage = {
	rock: './assets/images/icon-rock.svg',
	scissors: './assets/images/icon-scissors.svg',
	paper: './assets/images/icon-paper.svg',
	lizard: './assets/images/icon-lizard.svg',
	spock: './assets/images/icon-spock.svg'
};

let playerOption;
let pcOption;

let playerPoints = 0;
let pcPoints = 0;

const checkWinner = () => {
	if (playerOption === pcOption) {
		textResultElement.textContent = 'DRAW';
		return;
	}
	if (gameRules[playerOption][pcOption]) {
		textResultElement.textContent = 'YOU WIN';
		playerPoints++;
		playerScoreElement.textContent = playerPoints;
	} else {
		textResultElement.textContent = 'YOU LOSE';
		pcPoints++;
		pcScoreElement.textContent = pcPoints;
	}
	console.log(playerPoints);
};
const generatePcOption = () => {
	const randomNumber = Math.floor(Math.random() * gameOptions.length);
	pcOption = gameOptions[randomNumber];
	setResultImage();
};

const setPlayerOption = event => {
	playerOption = event.target.dataset.item;
	gameResultsElement.classList.remove('hide');
	sectionElement.classList.add('hide');
	generatePcOption();
};

const setResultImage = () => {
	resultPlayerElement.src = gameImage[playerOption];
	playerImageResultElement.classList.add([playerOption]);
	resultPcElement.src = gameImage[pcOption];
	pcImageResultElement.classList.add([pcOption]);
	checkWinner();
	console.log(playerOption);
	console.log(pcOption);
};

if (document.body.dataset.mode === 'advanced') {
	gameOptions.push('spock', 'lizard');
}

const playAgain = () => {
	gameResultsElement.classList.add('hide');
	sectionElement.classList.remove('hide');
	playerImageResultElement.classList.remove([playerOption]);
	pcImageResultElement.classList.remove([pcOption]);
};
gameElement.addEventListener('click', setPlayerOption);
playAgainButtonElement.addEventListener('click', playAgain);
