import { Moped } from './moped';

export class AlphaMoped extends Moped {
  displayDetails() {
    return `Мопед Альфа ${this.color.applyColor()}`;
  }
}
