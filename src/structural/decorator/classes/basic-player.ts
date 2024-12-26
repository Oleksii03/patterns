import { Player } from '../interfaces/Player';

export class BasicPlayer implements Player {
  getStats(): string {
    return 'Player: Basic equipment';
  }

  getProtectionLevel(): number {
    return 0;
  }
}
