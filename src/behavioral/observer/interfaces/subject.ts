import { Observer } from './i-observer';

export interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(flowerName: string): void;
}
