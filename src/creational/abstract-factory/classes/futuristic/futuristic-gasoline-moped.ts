import { GasolineMoped } from '../../interfaces/interfaces';

export class FuturisticGasolineMoped implements GasolineMoped {
  start(): string {
    return 'Стартую на футуристичному бензиновому мопеді Альфа';
  }
}
