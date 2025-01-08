import { AlphaMopedFacade } from './classes/Facade/alpha-moped-facade';

const mopedFacade = new AlphaMopedFacade();

function clientCode(moped: AlphaMopedFacade) {
  moped.startMoped();
  moped.turnLeft();
  // moped.stopMoped();
}

clientCode(mopedFacade);
