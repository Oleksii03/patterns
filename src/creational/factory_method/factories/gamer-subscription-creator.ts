import { Subscription } from '../interfaces/subscription';
import { SubscriptionCreator } from './subscription-creator';
import { PremiumSubscription } from '../classes/premium-subscription';

export class PremiumSubscriptionCreator extends SubscriptionCreator {
  public createSubscription(): Subscription {
    return new PremiumSubscription();
  }
}
