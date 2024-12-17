import './creational/creational';
// ------------------------------------

// ==================factory-method=========================
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

// const premiumSubscriptionCreator = new PremiumSubscriptionCreator();
// console.log(premiumSubscriptionCreator.manageSubscription());

// =====================singleton==============================
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

// ================================================================
// Інтерфейс будівельника
// interface HouseBuilder {
//   setWalls(walls: string): this;
//   build(): House;
// }

// // Клас продукту
// class House {
//   public walls?: string;

//   public describe(): void {
//     console.log(`House details:\nWalls: ${this.walls}`);
//   }
// }

// // Реалізація будівельника-----------------------
// class Builder implements HouseBuilder {
//   private house: House;

//   constructor() {
//     this.house = new House();
//   }

//   public setWalls(walls: string): this {
//     this.house.walls = walls;

//     return this;
//   }

//   public build(): House {
//     const result = this.house;
//     // console.log(result);
//     this.reset(); // Підготовка для нового будівництва

//     return result;
//   }

//   private reset(): void {
//     console.log(this.house);
//     this.house = new House();
//     console.log(this.house);
//   }
// }

// // Використання
// const builder = new Builder();
// const house1 = builder.setWalls('Brick walls').build();
