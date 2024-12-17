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

// -------

interface FlowerBouquetBuilder {
  setFlowerType(flowerType: string): this;
  setQuantity(quantity: number): this;
  setColor(color: string): this;
  setNeedsWrapping(needsWrapping: boolean): this;
  build(): FlowerBouquet;
}
class FlowerBouquet {
  public flowerType?: string;
  public quantity?: number;
  public color?: string;
  public needsWrapping?: boolean;

  public describe(): void {
    console.log(
      `Bouquet details:\nFlower Type: ${this.flowerType}\nQuantity: ${this.quantity}\nColor: ${this.color}\nNeeds Wrapping: ${this.needsWrapping}`
    );
  }
}
class FlowerBouquetBuilderImpl implements FlowerBouquetBuilder {
  private bouquet: FlowerBouquet;

  constructor() {
    this.bouquet = new FlowerBouquet();
  }

  public setFlowerType(flowerType: string): this {
    this.bouquet.flowerType = flowerType;
    return this;
  }

  public setQuantity(quantity: number): this {
    this.bouquet.quantity = quantity;
    return this;
  }

  public setColor(color: string): this {
    this.bouquet.color = color;
    return this;
  }

  public setNeedsWrapping(needsWrapping: boolean): this {
    this.bouquet.needsWrapping = needsWrapping;
    return this;
  }

  public build(): FlowerBouquet {
    const result = this.bouquet;
    this.reset();
    return result;
  }

  private reset(): void {
    this.bouquet = new FlowerBouquet();
  }
}

const builder = new FlowerBouquetBuilderImpl();

const bouquetRoses = builder
  .setFlowerType('Roses')
  .setQuantity(12)
  .setColor('Red')
  .setNeedsWrapping(true)
  .build();

bouquetRoses.describe();
