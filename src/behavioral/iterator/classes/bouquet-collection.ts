import { Flower } from '../interfaces/fower';
import { FlowerCollection } from '../interfaces/flower-collection';
import { FlowerIterator } from './flower-iterator';

export class BouquetCollection implements FlowerCollection {
  private readonly bouquets: Flower[] = [];

  addBouquet(name: string, price: number): void {
    this.bouquets.push({ name, price, category: 'Букет' });
  }

  createIterator(): Iterator<Flower> {
    return new FlowerIterator(this.bouquets);
  }
}
