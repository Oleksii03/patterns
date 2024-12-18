export interface Bouquet {
  setQuantity(quantity: number): void;
  setColor(color: string): void;
  setNeedsWrapping(needsWrapping: boolean): void;
  clone(): Bouquet;
}
