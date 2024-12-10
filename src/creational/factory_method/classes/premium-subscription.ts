import { Subscription } from '../interfaces/subscription';

export class PremiumSubscription implements Subscription {
  public operation(): string {
    return 'Premium';
  }
}
