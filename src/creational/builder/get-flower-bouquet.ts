import { FlowerBouquetBuilderImpl } from './builders/flower-bouquet-builder-impl';

const builder = new FlowerBouquetBuilderImpl();

const bouquetRoses = builder
  .setFlowerType('Roses')
  .setQuantity(12)
  .setColor('Red')
  .setNeedsWrapping(true)
  .build();

bouquetRoses.describe();
