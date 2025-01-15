import { Rose } from '../classes/rose';
import { Tulip } from '../classes/tulip';
import { Daisy } from '../classes/daisy';

export interface FlowerVisitor {
  visitRose(rose: Rose): void;
  visitTulip(tulip: Tulip): void;
  visitDaisy(daisy: Daisy): void;
}
