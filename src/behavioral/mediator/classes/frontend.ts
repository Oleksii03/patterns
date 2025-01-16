import { BaseComponent } from './base-component';

export class Frontend extends BaseComponent {
  sendMessage(message: string): void {
    console.log(`Frontend: Sending message: "${message}"`);
    if (this.mediator) {
      this.mediator.notify(this, message);
    }
  }

  receiveMessage(message: string): void {
    console.log(`Frontend: Received message: "${message}"`);
  }
}
