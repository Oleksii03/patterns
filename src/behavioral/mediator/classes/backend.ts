import { BaseComponent } from './base-component';

export class Backend extends BaseComponent {
  sendMessage(message: string): void {
    console.log(`Backend: Sending message: "${message}"`);
    if (this.mediator) {
      this.mediator.notify(this, message);
    }
  }

  receiveMessage(message: string): void {
    console.log(`Backend: Received message: "${message}"`);
  }
}
