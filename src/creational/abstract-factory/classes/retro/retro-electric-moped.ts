import { ElectricMoped } from '../../interfaces/interfaces';

export class RetroElectricMoped implements ElectricMoped {
  start(): string {
    return 'Стартую на ретро електромопеді Альфа';
  }
}
