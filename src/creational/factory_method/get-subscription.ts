import { SubscriptionCreator } from './factories/subscription-creator';
import { GamerSubscriptionCreator } from './factories/gamer-subscription-creator';
import { PremiumSubscriptionCreator } from './factories/premium-subscription-creator';

function getSubscripton(creator: SubscriptionCreator) {
  console.log(creator.manageSubscription());
}

const gamerSubscriptionCreator = new GamerSubscriptionCreator();
getSubscripton(gamerSubscriptionCreator);
const premiumSubscriptionCreator = new PremiumSubscriptionCreator();
getSubscripton(premiumSubscriptionCreator);
