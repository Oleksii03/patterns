import { Color } from '../interface';

export abstract class Moped {
  protected color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  abstract displayDetails(): string;
}
