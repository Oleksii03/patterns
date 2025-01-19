import { Observer } from '../interfaces/i-observer';

export class Customer implements Observer {
  constructor(private readonly name: string) {}

  public update(flowerName: string): void {
    console.log(`${this.name}: Сповіщення - доступна нова квітка "${flowerName}"`);
  }
}
