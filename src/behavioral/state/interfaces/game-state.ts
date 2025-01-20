import { CSGOGame } from '../classes/context/CSGO-game';

export interface GameState {
  startRound(game: CSGOGame): void;
  play(game: CSGOGame): void;
  endRound(game: CSGOGame): void;
}
