import { GameState } from '../../interfaces/game-state';
import { WaitingForPlayersState } from '../states/waiting-players';

export class CSGOGame {
  private state: GameState;

  constructor() {
    this.state = new WaitingForPlayersState();
  }

  setState(state: GameState): void {
    this.state = state;
  }

  startRound(): void {
    this.state.startRound(this);
  }

  play(): void {
    this.state.play(this);
  }

  endRound(): void {
    this.state.endRound(this);
  }
}
