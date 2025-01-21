import { Flower } from '../interfaces/fower';
import { Iterator } from '../interfaces/iterator';

export class FlowerIterator implements Iterator<Flower> {
  private index: number = 0;

  constructor(private readonly flowers: Flower[]) {}

  next(): IteratorResult<Flower> {
    if (this.hasNext()) {
      return {
        done: false,
        value: this.flowers[this.index++],
      };
    }
    return {
      done: true,
      value: undefined,
    };
  }

  hasNext(): boolean {
    return this.index < this.flowers.length;
  }
}
