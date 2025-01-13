import { PaymentStrategy } from '../interfaces/payment-strategy';

export class CashPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Оплачено ${amount} грн готівкою.`);
  }
}
