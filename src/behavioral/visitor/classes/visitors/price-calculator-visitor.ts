import { FlowerVisitor } from '../../interfaces/flower-visitor';
import { Rose } from '../../classes/rose';
import { Tulip } from '../../classes/tulip';
import { Daisy } from '../../classes/daisy';

export class PriceCalculatorVisitor implements FlowerVisitor {
  private totalPrice = 0;

  visitRose(rose: Rose): void {
    this.totalPrice += rose.price;
  }

  visitTulip(tulip: Tulip): void {
    this.totalPrice += tulip.price;
  }

  visitDaisy(daisy: Daisy): void {
    this.totalPrice += daisy.price;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }
}
