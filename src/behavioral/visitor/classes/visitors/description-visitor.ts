import { FlowerVisitor } from '../../interfaces/flower-visitor';
import { Rose } from '../../classes/rose';
import { Tulip } from '../../classes/tulip';
import { Daisy } from '../../classes/daisy';

export class DescriptionVisitor implements FlowerVisitor {
  private readonly description: string[] = [];

  visitRose(rose: Rose): void {
    this.description.push(rose.getName());
  }

  visitTulip(tulip: Tulip): void {
    this.description.push(tulip.getName());
  }

  visitDaisy(daisy: Daisy): void {
    this.description.push(daisy.getName());
  }

  getDescription(): string {
    return this.description.join(', ');
  }
}
