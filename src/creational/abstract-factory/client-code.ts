import { MopedFactory } from './interfaces/interfaces';
import { FuturisticMopedFactory } from './factories/futuristic-factory';
import { RetroMopedFactory } from './factories/retro-factory';

function clientCode(factory: MopedFactory) {
  const electricMoped = factory.createElectricMoped();
  const gasolineMoped = factory.createGasolineMoped();

  console.log(electricMoped.start());
  console.log(gasolineMoped.start());
}

// Використання
const futuristicMopedFactory = new FuturisticMopedFactory();
console.log('Futuristic Mopeds:');
clientCode(futuristicMopedFactory);

const retroMopedFactory = new RetroMopedFactory();
console.log('\nRetro Mopeds:');
clientCode(retroMopedFactory);
