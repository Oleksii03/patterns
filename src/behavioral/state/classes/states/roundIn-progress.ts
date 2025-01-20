import { GameState } from '../../interfaces/game-state';
import { CSGOGame } from '../context/CSGO-game';
import { RoundEndState } from './round-end';

export class RoundInProgressState implements GameState {
  startRound(): void {
    console.log('Раунд запущений!');
  }

  play(game: CSGOGame): void {
    console.log('Гравці виконують завдання.');

    const winner = Math.random() > 0.5 ? 'Терористи' : 'Контртерористи';

    console.log(`${winner} перемогли у цьому раунді!`);
    game.setState(new RoundEndState());
  }

  endRound(): void {
    console.log('Гра ще триває. Завершіть раунд!');
  }
}
