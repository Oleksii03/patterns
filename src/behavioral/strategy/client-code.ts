import { PaymentProcessor } from './classes/payment-processor';
import { CreditCardPayment } from './classes/credit-card-payment';
import { CashPayment } from './classes/cash-payment';

const paymentProcessor = new PaymentProcessor();

// Оплата через кредитну картку
paymentProcessor.setStrategy(new CreditCardPayment('4434567898765432'));
paymentProcessor.processPayment(1000);

// Оплата готівкою
paymentProcessor.setStrategy(new CashPayment());
paymentProcessor.processPayment(700);
