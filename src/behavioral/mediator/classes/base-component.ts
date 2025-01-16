import { Mediator } from '../interfaces/mediator';

export class BaseComponent {
  protected mediator: Mediator | null = null;

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}
