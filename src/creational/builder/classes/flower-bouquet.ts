export class FlowerBouquet {
  public flowerType?: string;
  public quantity?: number;
  public color?: string;
  public needsWrapping?: boolean;

  public describe(): void {
    console.log(
      `Bouquet details:\nFlower Type: ${this.flowerType}\nQuantity: ${this.quantity}\nColor: ${this.color}\nNeeds Wrapping: ${this.needsWrapping}`
    );
  }
}
