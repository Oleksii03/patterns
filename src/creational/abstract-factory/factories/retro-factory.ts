import { GasolineMoped, ElectricMoped, MopedFactory } from '../interfaces/interfaces';
import { RetroElectricMoped } from '../classes/retro/retro-electric-moped';
import { RetroGasolineMoped } from '../classes/retro/retro-gasoline-moped';

export class RetroMopedFactory implements MopedFactory {
  createElectricMoped(): ElectricMoped {
    return new RetroElectricMoped();
  }

  createGasolineMoped(): GasolineMoped {
    return new RetroGasolineMoped();
  }
}
