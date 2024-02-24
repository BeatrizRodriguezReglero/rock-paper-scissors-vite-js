import { gameImage, gameOptions, gameRules } from './constants';
import {
	gameResultsElement,
	pcImageResultElement,
	pcScoreElement,
	playerImageResultElement,
	playerScoreElement,
	resultPcElement,
	resultPlayerElement,
	sectionElement,
	textResultElement
} from './dom';

let playerOption = null;
let pcOption = null;

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
	playerImageResultElement.classList.add(playerOption);
	resultPcElement.src = gameImage[pcOption];
	pcImageResultElement.classList.add(pcOption);
	if (playerOption && pcOption) {
		checkWinner();
		console.log(playerOption);
		console.log(pcOption);
	} else {
		console.log(playerOption);
		console.log(pcOption);
	}
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

export {
	checkWinner,
	generatePcOption,
	setPlayerOption,
	setResultImage,
	playAgain
};
