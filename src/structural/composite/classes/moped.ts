import { Component } from './component';

export class Moped extends Component {
  private readonly name: string;
  private readonly parts: Component[] = [];

  constructor(name: string) {
    super();
    this.name = name;
  }

  addPart(part: Component): void {
    this.parts.push(part);
  }

  removePart(part: Component): void {
    const idx = this.parts.indexOf(part);
    if (idx !== -1) this.parts.splice(idx, 1);
  }

  displayDetails(): void {
    console.log(`Moped: ${this.name}`);
    for (const part of this.parts) {
      part.displayDetails();
    }
  }

  getPrice(): number {
    return this.parts.reduce((total, part) => total + part.getPrice(), 0);
  }
}
