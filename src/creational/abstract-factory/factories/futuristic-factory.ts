import { GasolineMoped, ElectricMoped, MopedFactory } from '../interfaces/interfaces';
import { FuturisticElectricMoped } from '../classes/futuristic/futuristic-electric-moped';
import { FuturisticGasolineMoped } from '../classes/futuristic/futuristic-gasoline-moped';

export class FuturisticMopedFactory implements MopedFactory {
  createElectricMoped(): ElectricMoped {
    return new FuturisticElectricMoped();
  }

  createGasolineMoped(): GasolineMoped {
    return new FuturisticGasolineMoped();
  }
}
