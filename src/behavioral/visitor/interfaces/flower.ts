import { FlowerVisitor } from './flower-visitor';

export interface Flower {
  accept(visitor: FlowerVisitor): void;
}
