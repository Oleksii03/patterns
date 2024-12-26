import { Player } from '../interfaces/Player';

export class PlayerDecorator implements Player {
  protected player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  getStats(): string {
    return this.player.getStats();
  }

  getProtectionLevel(): number {
    return this.player.getProtectionLevel();
  }
}
