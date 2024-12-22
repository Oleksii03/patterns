import { GasolineMoped } from '../../interfaces/interfaces';

export class RetroGasolineMoped implements GasolineMoped {
  start(): string {
    return 'Стартую на ретро бензиновому мопеді Альфа';
  }
}
