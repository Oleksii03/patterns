// ---classes ---
import { Rose } from './classes/rose';
import { Tulip } from './classes/tulip';
import { Daisy } from './classes/daisy';
import { PriceCalculatorVisitor } from './classes/visitors/price-calculator-visitor';
import { DescriptionVisitor } from './classes/visitors/description-visitor';
// --- interfaces ---
import { Flower } from './interfaces/flower';
import { FlowerVisitor } from './interfaces/flower-visitor';
// -------/------------

const bouquetArr: Flower[] = [new Rose(10), new Tulip(7), new Daisy(5)];

const priceCalculator = new PriceCalculatorVisitor();
const descriptionVisitor = new DescriptionVisitor();

function clientCode(bouquet: Flower[], visitor: FlowerVisitor) {
  bouquet.forEach(flower => flower.accept(visitor));
}

clientCode(bouquetArr, descriptionVisitor);
clientCode(bouquetArr, priceCalculator);

console.log(`Total price of bouquet: ${priceCalculator.getTotalPrice()}$`);
console.log(`Bouquet description: ${descriptionVisitor.getDescription()}.`);

console.log('-------------------------------------------------');
