import { Bouquet } from './interface';

export class RoseBouquet implements Bouquet {
  constructor(
    private quantity: number,
    private color: string,
    private needsWrapping: boolean
  ) {}

  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public setNeedsWrapping(needsWrapping: boolean): void {
    this.needsWrapping = needsWrapping;
  }

  public clone(): Bouquet {
    return new RoseBouquet(this.quantity, this.color, this.needsWrapping);
  }
}
