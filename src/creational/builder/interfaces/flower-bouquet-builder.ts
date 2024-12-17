import { FlowerBouquet } from '../classes/flower-bouquet';

export interface FlowerBouquetBuilder {
  setFlowerType(flowerType: string): this;
  setQuantity(quantity: number): this;
  setColor(color: string): this;
  setNeedsWrapping(needsWrapping: boolean): this;
  build(): FlowerBouquet;
}
