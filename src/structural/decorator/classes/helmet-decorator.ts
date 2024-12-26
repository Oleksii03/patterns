import { PlayerDecorator } from './player-decorator';

export class HelmetDecorator extends PlayerDecorator {
  getStats(): string {
    return `${super.getStats()} + Helmet`;
  }

  getProtectionLevel(): number {
    return super.getProtectionLevel() + 25;
  }
}
