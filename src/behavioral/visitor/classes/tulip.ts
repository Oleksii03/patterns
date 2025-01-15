import { Flower } from '../interfaces/flower';

export class Tulip implements Flower {
  constructor(public price: number) {}

  getName(): string {
    return 'Tulip';
  }

  accept(visitor: FlowerVisitor): void {
    visitor.visitTulip(this);
  }
}
