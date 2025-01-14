import { BouquetMaker } from './bouquet-maker';

export class WildBouquetMaker extends BouquetMaker {
  protected addFlowers(): void {
    console.log('Додавання ромашок, волошок та лаванди...');
  }

  protected addDecorations(): void {
    console.log('Додавання сухоцвітів...');
  }
}
