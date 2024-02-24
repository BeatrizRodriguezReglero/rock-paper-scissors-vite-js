import { gameElement, playAgainButtonElement } from './dom';
import { playAgain, setPlayerOption } from './game-functions';

gameElement.addEventListener('click', setPlayerOption);
playAgainButtonElement.addEventListener('click', playAgain);
