import { Moped } from './moped';

export class KarpatyMoped extends Moped {
  displayDetails() {
    return `Мопед Карпати ${this.color.applyColor()}`;
  }
}
