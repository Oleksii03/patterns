import { Flower } from '../interfaces/flower';

export class Daisy implements Flower {
  constructor(public price: number) {}

  getName(): string {
    return 'Daisy';
  }

  accept(visitor: FlowerVisitor): void {
    visitor.visitDaisy(this);
  }
}
