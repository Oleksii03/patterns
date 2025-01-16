import { Mediator } from '../interfaces/mediator';
import { Frontend } from './frontend';
import { Backend } from './backend';

export class WebMediator implements Mediator {
  private readonly frontend: Frontend;
  private readonly backend: Backend;

  constructor(frontend: Frontend, backend: Backend) {
    this.frontend = frontend;
    this.frontend.setMediator(this);

    this.backend = backend;
    this.backend.setMediator(this);
  }

  notify(sender: object, message: string): void {
    switch (sender) {
      case this.frontend:
        console.log('Посередник: Frontend надсилає повідомлення до Backend.');
        this.backend.receiveMessage(message);
        break;
      case this.backend:
        console.log('Посередник: Backend надсилає повідомлення до Frontend.');
        this.frontend.receiveMessage(message);
        break;
      default:
        console.log('Посередник: Невідоме джерело повідомлення.');
    }
  }
}
