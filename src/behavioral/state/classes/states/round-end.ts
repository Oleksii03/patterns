import { GameState } from '../../interfaces/game-state';
import { CSGOGame } from '../context/CSGO-game';
import { RoundInProgressState } from './roundIn-progress';

export class RoundEndState implements GameState {
  startRound(game: CSGOGame): void {
    console.log('Починаємо новий раунд!');
    game.setState(new RoundInProgressState());
  }

  play(): void {
    console.log('Раунд завершено. Почніть новий раунд.');
  }

  endRound(): void {
    console.log('Раунд вже завершено.');
  }
}
