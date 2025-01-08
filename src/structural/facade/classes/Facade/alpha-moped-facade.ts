import { Engine } from '../subsystems/engine';
import { Lights } from '../subsystems/lights';
import { Handlebar } from '../subsystems/handlebar';
import { Wheels } from '../subsystems/wheels';

export class AlphaMopedFacade {
  private readonly engine: Engine;
  private readonly lights: Lights;
  private readonly handlebar: Handlebar;
  private readonly wheels: Wheels;

  constructor() {
    this.engine = new Engine();
    this.lights = new Lights();
    this.handlebar = new Handlebar();
    this.wheels = new Wheels();
  }

  startMoped() {
    this.lights.turnOn();
    this.engine.start();
    this.wheels.startMoving();
    console.log('Мопед готовий до поїздки');
  }

  stopMoped() {
    this.wheels.stopMoving();
    this.engine.stop();
    this.lights.turnOff();
    console.log('Мопед зупинено');
  }

  turnLeft() {
    this.handlebar.turnLeft();
  }

  turnRight() {
    this.handlebar.turnRight();
  }
}
