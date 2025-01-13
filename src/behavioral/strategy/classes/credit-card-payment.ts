import { PaymentStrategy } from '../interfaces/payment-strategy';

export class CreditCardPayment implements PaymentStrategy {
  constructor(private readonly cardNumber: string) {}

  pay(amount: number): void {
    console.log(`Оплачено ${amount} грн за допомогою кредитної картки ${this.cardNumber}`);
  }
}
