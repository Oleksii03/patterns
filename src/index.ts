import './creational/creational';
// ----------------------------------

// interface Subscription {
//   operation(): string;
// }

// class GamerSubscription implements Subscription {
//   public operation(): string {
//     return 'Gamer';
//   }
// }

// class PremiumSubscription implements Subscription {
//   public operation(): string {
//     return 'Premium';
//   }
// }

// abstract class SubscriptionCreator {
//   public abstract createSubscription(): Subscription;

//   public manageSubscription(): string {
//     const subscription = this.createSubscription();
//     console.log(subscription);

//     return `Managing a ${subscription.operation()} subscription`;
//   }
// }

// class GamerSubscriptionCreator extends SubscriptionCreator {
//   public createSubscription(): Subscription {
//     return new GamerSubscription();
//   }
// }

// class PremiumSubscriptionCreator extends SubscriptionCreator {
//   public createSubscription(): Subscription {
//     return new PremiumSubscription();
//   }
// }

// const gamerSubscriptionCreator = new GamerSubscriptionCreator();
// console.log(gamerSubscriptionCreator.manageSubscription());

// // --------------

// const premiumSubscriptionCreator = new PremiumSubscriptionCreator();
// console.log(premiumSubscriptionCreator.manageSubscription());

// ----------singleton-------------------------------------------

// interface ApiResponse {
//   id: number;
//   name: string;
//   data: any;
// }

// export class ApiManager {
//   private static instance: ApiManager;

//   private constructor() {}

//   public static getInstance(): ApiManager {
//     if (!ApiManager.instance) {
//       ApiManager.instance = new ApiManager();
//     }
//     return ApiManager.instance;
//   }

//   public async get(url: string): Promise<any> {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return (await response.json()) as any;
//     } catch (error) {
//       console.error('Failed to fetch data:', error);
//       throw error;
//     }
//   }
// }

// // Використання Singleton для викликів API
// const apiManager1 = ApiManager.getInstance();
// const apiManager2 = ApiManager.getInstance();

// export const API_KEY = 'bbcabf34e55a9240d0c44542dbf6e7ac';
// export const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// apiManager1
//   .get(`${BASE_URL}?q=Lviv&appid=${API_KEY}&units=metric`)
//   .then(data => console.log('Data fetched:', data))
//   .catch(error => console.error('Error fetching data:', error));

// // Перевірка того, що екземпляри є однаковими
// console.log(apiManager1 === apiManager2); // Виведе: true

// ------------------------------------------
