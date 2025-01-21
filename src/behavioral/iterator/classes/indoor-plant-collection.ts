import { Flower } from '../interfaces/fower';
import { FlowerCollection } from '../interfaces/flower-collection';
import { FlowerIterator } from './flower-iterator';

export class IndoorPlantCollection implements FlowerCollection {
  private readonly plants: Flower[] = [];

  addPlant(name: string, price: number): void {
    this.plants.push({ name, price, category: 'Кімнатна рослина' });
  }

  createIterator(): Iterator<Flower> {
    return new FlowerIterator(this.plants);
  }
}
