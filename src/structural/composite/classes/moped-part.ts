import { Component } from './component';

export class MopedPart extends Component {
  private readonly name: string;
  private readonly price: number;

  constructor(name: string, price: number) {
    super();
    this.name = name;
    this.price = price;
  }

  displayDetails(): void {
    console.log(`Part: ${this.name}, Price: ${this.price}₴`);
  }

  getPrice(): number {
    return this.price;
  }
}
