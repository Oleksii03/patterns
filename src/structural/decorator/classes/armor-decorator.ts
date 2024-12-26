import { PlayerDecorator } from './player-decorator';

export class ArmorDecorator extends PlayerDecorator {
  getStats(): string {
    return `${super.getStats()} + Armor`;
  }

  getProtectionLevel(): number {
    return super.getProtectionLevel() + 50;
  }
}
