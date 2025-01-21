import { Flower } from './fower';

export interface FlowerCollection {
  createIterator(): Iterator<Flower>;
}
