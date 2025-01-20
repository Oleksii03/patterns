import { GameState } from '../../interfaces/game-state';
import { CSGOGame } from '../context/CSGO-game';
import { RoundInProgressState } from './roundIn-progress';

export class WaitingForPlayersState implements GameState {
  startRound(game: CSGOGame): void {
    console.log('Гравці підключені. Починаємо раунд!');
    game.setState(new RoundInProgressState());
  }

  play(): void {
    console.log('Не можна почати гру без усіх гравців.');
  }

  endRound(): void {
    console.log('Гра ще не розпочалася.');
  }
}
