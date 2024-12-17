import { FlowerBouquet } from '../classes/flower-bouquet';
import { FlowerBouquetBuilder } from '../interfaces/flower-bouquet-builder';

export class FlowerBouquetBuilderImpl implements FlowerBouquetBuilder {
  private bouquet: FlowerBouquet;

  constructor() {
    this.bouquet = new FlowerBouquet();
  }

  public setFlowerType(flowerType: string): this {
    this.bouquet.flowerType = flowerType;
    return this;
  }

  public setQuantity(quantity: number): this {
    this.bouquet.quantity = quantity;
    return this;
  }

  public setColor(color: string): this {
    this.bouquet.color = color;
    return this;
  }

  public setNeedsWrapping(needsWrapping: boolean): this {
    this.bouquet.needsWrapping = needsWrapping;
    return this;
  }

  public build(): FlowerBouquet {
    const result = this.bouquet;
    this.reset();
    return result;
  }

  private reset(): void {
    this.bouquet = new FlowerBouquet();
  }
}
