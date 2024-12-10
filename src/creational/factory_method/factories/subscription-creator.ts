import { Subscription } from '../interfaces/subscription';

export abstract class SubscriptionCreator {
  public abstract createSubscription(): Subscription;

  public manageSubscription(): string {
    const subscription = this.createSubscription();
    return `I'm managing a ${subscription.operation()} subscription`;
  }
}
