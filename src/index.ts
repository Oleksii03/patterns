// import './creational/creational';
// ----------------------------------

interface Subscription {
  operation(): string;
}

// Конкретна підписка GamerSubscription
class GamerSubscription implements Subscription {
  public operation(): string {
    return 'Gamer';
  }
}

// Конкретна підписка PremiumSubscription
class PremiumSubscription implements Subscription {
  public operation(): string {
    return 'Premium';
  }
}

abstract class SubscriptionCreator {
  public abstract createSubscription(): Subscription;

  public manageSubscription(): string {
    // Викликаємо фабричний метод, щоби отримати об'єкт підписки.
    const subscription = this.createSubscription();
    console.log(subscription);
    // Далі працюємо з цією підпискою.
    return `Managing a ${subscription.operation()} subscription`;
  }
}

// Конкретний творець GamerSubscriptionCreator
class GamerSubscriptionCreator extends SubscriptionCreator {
  // Реалізація абстрактного методу
  public createSubscription(): Subscription {
    return new GamerSubscription();
  }
}

// Конкретний творець PremiumSubscriptionCreator
class PremiumSubscriptionCreator extends SubscriptionCreator {
  // Реалізація абстрактного методу
  public createSubscription(): Subscription {
    return new PremiumSubscription();
  }
}

// Створення об'єктів та виклик методів
const gamerSubscriptionCreator = new GamerSubscriptionCreator();
console.log(gamerSubscriptionCreator.manageSubscription());

// --------------

const premiumSubscriptionCreator = new PremiumSubscriptionCreator();
console.log(premiumSubscriptionCreator.manageSubscription());
