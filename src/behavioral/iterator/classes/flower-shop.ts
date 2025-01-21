import { FlowerCollection } from '../interfaces/flower-collection';

export class FlowerShop {
  constructor(private readonly collections: FlowerCollection[]) {}

  displayAllFlowers(): void {
    this.collections.forEach(collection => {
      const iterator = collection.createIterator();

      let result = iterator.next();
      while (!result.done) {
        const flower = result.value;
        console.log(`${flower.name} (${flower.category}) - ${flower.price.toFixed(2)}₴`);
        result = iterator.next();
      }
      console.log('\n');
    });
  }
}
