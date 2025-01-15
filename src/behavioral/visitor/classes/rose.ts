import { Flower } from '../interfaces/flower';

export class Rose implements Flower {
  constructor(public price: number) {}

  getName(): string {
    return 'Rose';
  }

  accept(visitor: FlowerVisitor): void {
    visitor.visitRose(this);
  }
}
