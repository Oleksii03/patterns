import { Subscription } from '../interfaces/subscription';

export class GamerSubscription implements Subscription {
  public operation(): string {
    return 'Gamer';
  }
}
