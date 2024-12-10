import { Subscription } from '../interfaces/subscription';
import { SubscriptionCreator } from './subscription-creator';
import { GamerSubscription } from '../classes/gamer-subscription';

export class GamerSubscriptionCreator extends SubscriptionCreator {
  public createSubscription(): Subscription {
    return new GamerSubscription();
  }
}
