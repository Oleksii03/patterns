import { BouquetMaker } from './bouquet-maker';

export class ClassicBouquetMaker extends BouquetMaker {
  protected addFlowers(): void {
    console.log('Додавання троянд та лілій...');
  }

  protected addDecorations(): void {
    console.log('Додавання стрічки...');
  }
}
