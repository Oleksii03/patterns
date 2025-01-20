import { CSGOGame } from './classes/context/CSGO-game';

const game = new CSGOGame();

game.play(); // Не можна почати гру без усіх гравців.
game.startRound(); // Гравці підключені. Починаємо раунд!
game.play(); // Раунд у розпалі! Гравці виконують завдання. (визначається переможець)
game.play(); // Раунд завершено. Почніть новий раунд.
game.startRound(); // Починаємо новий раунд!
