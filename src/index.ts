abstract class SubscriptionCreator {
  public abstract createSubscription(): Subscription;

  public manageSubscription(): string {
    const subscription = this.createSubscription();
    return `I'm managing a ${subscription.operation()} subscription`;
  }
}

interface Subscription {
  operation(): string;
}

class GamerSubscription implements Subscription {
  public operation(): string {
    return 'Gamer';
  }
}

// class PremiumSubscription implements Subscription {
//   public operation(): string {
//     return 'Premium';
//   }
// }

class GamerSubscriptionCreator extends SubscriptionCreator {
  public createSubscription(): Subscription {
    return new GamerSubscription();
  }
}

// class PremiumSubscriptionCreator extends SubscriptionCreator {
//   public createSubscription(): Subscription {
//     return new PremiumSubscription();
//   }
// }

function initSubscripton(creator: SubscriptionCreator) {
  console.log(creator.manageSubscription());
}

const gamerSubscriptionCreator = new GamerSubscriptionCreator();
initSubscripton(gamerSubscriptionCreator);
// const premiumSubscriptionCreator = new PremiumSubscriptionCreator();
