import { PaymentStrategy } from '../interfaces/payment-strategy';

export class PaymentProcessor {
  private strategy: PaymentStrategy | null = null;

  // Метод для встановлення стратегії
  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  // Виконання оплати
  processPayment(amount: number): void {
    if (!this.strategy) {
      console.log('Стратегію оплати не встановлено');
      return;
    }
    this.strategy.pay(amount);
  }
}
