import { Subject } from '../interfaces/subject';
import { Observer } from '../interfaces/i-observer';

export class FlowerShop implements Subject {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  public notifyObservers(flowerName: string): void {
    for (const observer of this.observers) {
      observer.update(flowerName);
    }
  }

  public addNewFlower(flowerName: string): void {
    console.log(`\nFlowerShop: Додано нову квітку - ${flowerName}`);
    this.notifyObservers(flowerName);
  }
}
