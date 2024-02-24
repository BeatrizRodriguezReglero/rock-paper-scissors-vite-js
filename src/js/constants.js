import rock from '../assets/images/icon-rock.svg';
import scissors from '../assets/images/icon-scissors.svg';
import paper from '../assets/images/icon-paper.svg';
import lizard from '../assets/images/icon-lizard.svg';
import spock from '../assets/images/icon-spock.svg';

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
	rock,
	scissors,
	paper,
	lizard,
	spock
};

export { gameOptions, gameRules, gameImage };
