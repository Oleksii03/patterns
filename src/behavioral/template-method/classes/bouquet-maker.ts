export abstract class BouquetMaker {
  public makeBouquet(): void {
    this.prepareBase();
    this.addFlowers();
    this.addDecorations();
    this.wrapBouquet();
  }

  protected prepareBase(): void {
    console.log('Підготовка основи для букета...');
  }

  protected wrapBouquet(): void {
    console.log('Упаковка букета...');
  }

  protected abstract addFlowers(): void;
  protected abstract addDecorations(): void;
}
