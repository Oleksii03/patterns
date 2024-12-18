// import './creational/creational';
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

// =================builder===============================================
// interface FlowerBouquetBuilder {
//   setFlowerType(flowerType: string): this;
//   setQuantity(quantity: number): this;
//   setColor(color: string): this;
//   setNeedsWrapping(needsWrapping: boolean): this;
//   build(): FlowerBouquet;
// }
// class FlowerBouquet {
//   public flowerType?: string;
//   public quantity?: number;
//   public color?: string;
//   public needsWrapping?: boolean;

//   public describe(): void {
//     console.log(
//       `Bouquet details:\nFlower Type: ${this.flowerType}\nQuantity: ${this.quantity}\nColor: ${this.color}\nNeeds Wrapping: ${this.needsWrapping}`
//     );
//   }
// }
// class FlowerBouquetBuilderImpl implements FlowerBouquetBuilder {
//   private bouquet: FlowerBouquet;

//   constructor() {
//     this.bouquet = new FlowerBouquet();
//   }

//   public setFlowerType(flowerType: string): this {
//     this.bouquet.flowerType = flowerType;
//     return this;
//   }

//   public setQuantity(quantity: number): this {
//     this.bouquet.quantity = quantity;
//     return this;
//   }

//   public setColor(color: string): this {
//     this.bouquet.color = color;
//     return this;
//   }

//   public setNeedsWrapping(needsWrapping: boolean): this {
//     this.bouquet.needsWrapping = needsWrapping;
//     return this;
//   }

//   public build(): FlowerBouquet {
//     const result = this.bouquet;
//     this.reset();
//     return result;
//   }

//   private reset(): void {
//     this.bouquet = new FlowerBouquet();
//   }
// }

// Приклад використання
// const builder = new FlowerBouquetBuilderImpl();

// const bouquetRoses = builder
//   .setFlowerType('Roses')
//   .setQuantity(12)
//   .setColor('Red')
//   .setNeedsWrapping(true)
//   .build();

// bouquetRoses.describe();

// ==========prototype=====================================================
class RoseBouquet {
  constructor(
    public quantity: number,
    public color: string,
    public needsWrapping: boolean
  ) {}

  clone(): RoseBouquet {
    return new RoseBouquet(this.quantity, this.color, this.needsWrapping);
  }
}

// Приклад використання
const originalBouquet = new RoseBouquet(12, 'Red', true);

const newBouquet = originalBouquet.clone();
newBouquet.quantity = 24;

console.log(originalBouquet);
console.log(newBouquet);
