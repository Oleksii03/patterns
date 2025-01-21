export interface Iterator<T> {
  next(): IteratorResult<T>;
  hasNext(): boolean;
}
