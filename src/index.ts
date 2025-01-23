// import './creational/creational';
// import './structural/structural';
// import './behavioral/behavioral';
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

// // Приклад використання
// const builder = new FlowerBouquetBuilderImpl();

// const bouquetRoses = builder
//   .setFlowerType('Roses')
//   .setQuantity(12)
//   .setColor('Red')
//   .setNeedsWrapping(true)
//   .build();

// bouquetRoses.describe();

// ==========prototype=====================================================
// class RoseBouquet {
//   constructor(
//     public quantity: number,
//     public color: string,
//     public needsWrapping: boolean
//   ) {}

//   clone(): RoseBouquet {
//     return new RoseBouquet(this.quantity, this.color, this.needsWrapping);
//   }
// }

// // Приклад використання
// const originalBouquet = new RoseBouquet(12, 'Red', true);

// const newBouquet = originalBouquet.clone();
// newBouquet.quantity = 24;

// console.log(originalBouquet);
// console.log(newBouquet);

// -------------var-2----------------------------------------------------

// interface Bouquet {
//   setQuantity(quantity: number): void;
//   setColor(color: string): void;
//   setNeedsWrapping(needsWrapping: boolean): void;
//   clone(): Bouquet;
// }

// class RoseBouquet implements Bouquet {
//   constructor(
//     private quantity: number,
//     private color: string,
//     private needsWrapping: boolean
//   ) {}

//   public setQuantity(quantity: number): void {
//     this.quantity = quantity;
//   }

//   public setColor(color: string): void {
//     this.color = color;
//   }

//   public setNeedsWrapping(needsWrapping: boolean): void {
//     this.needsWrapping = needsWrapping;
//   }

//   public clone(): Bouquet {
//     return new RoseBouquet(this.quantity, this.color, this.needsWrapping);
//   }
// }

// // Приклад використання
// const originalBouquet: Bouquet = new RoseBouquet(12, 'Red', true);
// const newBouquet = originalBouquet.clone();

// newBouquet.setQuantity(24);
// newBouquet.setColor('yellow');

// console.log(originalBouquet);
// console.log(newBouquet);

// ==========abstract-factory===================================
// Інтерфейси для продуктів
// interface ElectricMoped {
//   start(): string;
// }

// interface GasolineMoped {
//   start(): string;
// }

// // Реалізації для стилю Futuristic
// class FuturisticElectricMoped implements ElectricMoped {
//   start(): string {
//     return 'Стартую на футуристичному електромопеді Альфа';
//   }
// }

// class FuturisticGasolineMoped implements GasolineMoped {
//   start(): string {
//     return 'Стартую на футуристичному бензиновому мопеді Альфа';
//   }
// }

// // Реалізації для стилю Retro
// class RetroElectricMoped implements ElectricMoped {
//   start(): string {
//     return 'Стартую на ретро електромопеді Альфа';
//   }
// }

// class RetroGasolineMoped implements GasolineMoped {
//   start(): string {
//     return 'Стартую на ретро бензиновому мопеді Альфа';
//   }
// }

// // Абстрактна фабрика
// interface MopedFactory {
//   createElectricMoped(): ElectricMoped;
//   createGasolineMoped(): GasolineMoped;
// }

// // Фабрика для Futuristic стилю
// class FuturisticMopedFactory implements MopedFactory {
//   createElectricMoped(): ElectricMoped {
//     return new FuturisticElectricMoped();
//   }

//   createGasolineMoped(): GasolineMoped {
//     return new FuturisticGasolineMoped();
//   }
// }

// // Фабрика для Retro стилю
// class RetroMopedFactory implements MopedFactory {
//   createElectricMoped(): ElectricMoped {
//     return new RetroElectricMoped();
//   }

//   createGasolineMoped(): GasolineMoped {
//     return new RetroGasolineMoped();
//   }
// }

// // Клієнтський код
// function clientCode(factory: MopedFactory) {
//   const electricMoped = factory.createElectricMoped();
//   const gasolineMoped = factory.createGasolineMoped();

//   console.log(electricMoped.start());
//   console.log(gasolineMoped.start());
// }

// // Використання
// const futuristicMopedFactory = new FuturisticMopedFactory();
// console.log('Futuristic Mopeds:');
// clientCode(futuristicMopedFactory);

// const retroMopedFactory = new RetroMopedFactory();
// console.log('\nRetro Mopeds:');
// clientCode(retroMopedFactory);

// ==============adapter=========================================
// interface PcGame {
//   launch(): string;
// }

// // Клас, що описує стару гру для приставки
// class ConsoleGame {
//   startOnConsole(): string {
//     return 'Гра для старої приставки.';
//   }
// }

// // Адаптер, який дозволяє запустити гру на ПК
// class ConsoleToPcAdapter implements PcGame {
//   private readonly consoleGame: ConsoleGame;

//   constructor(consoleGame: ConsoleGame) {
//     this.consoleGame = consoleGame;
//   }

//   launch(): string {
//     return `${this.consoleGame.startOnConsole()} (адаптовано для запуску на ПК)`;
//   }
// }

// // Використання
// const consoleGame = new ConsoleGame();
// const pcGameAdapter = new ConsoleToPcAdapter(consoleGame);

// console.log(pcGameAdapter.launch());

// =========decorator===========================================
// Базовий інтерфейс
// interface Player {
//   getStats(): string;
//   getProtectionLevel(): number;
// }

// // Конкретний компонент: базовий герой
// class BasicPlayer implements Player {
//   getStats(): string {
//     return 'Player: Basic equipment';
//   }

//   getProtectionLevel(): number {
//     return 0; // Початковий рівень захисту
//   }
// }

// // Базовий декоратор
// class PlayerDecorator implements Player {
//   protected player: Player;

//   constructor(player: Player) {
//     this.player = player;
//   }

//   getStats(): string {
//     return this.player.getStats();
//   }

//   getProtectionLevel(): number {
//     return this.player.getProtectionLevel();
//   }
// }

// // Декоратор: додавання бронежилета
// class ArmorDecorator extends PlayerDecorator {
//   getStats(): string {
//     return `${super.getStats()} + Armor`;
//   }

//   getProtectionLevel(): number {
//     return super.getProtectionLevel() + 50; // Додаємо 50 одиниць захисту
//   }
// }

// // Декоратор: додавання каски
// class HelmetDecorator extends PlayerDecorator {
//   getStats(): string {
//     return `${super.getStats()} + Helmet`;
//   }

//   getProtectionLevel(): number {
//     return super.getProtectionLevel() + 25; // Додаємо 25 одиниць захисту
//   }
// }

// // Використання
// const basicPlayer = new BasicPlayer();
// console.log(
//   'Базовий гравець:',
//   basicPlayer.getStats(),
//   '| Захист:',
//   basicPlayer.getProtectionLevel()
// );

// const playerWithArmor = new ArmorDecorator(basicPlayer);
// console.log(
//   'Гравець з бронежилетом:',
//   playerWithArmor.getStats(),
//   '| Захист:',
//   playerWithArmor.getProtectionLevel()
// );

// const playerWithArmorAndHelmet = new HelmetDecorator(playerWithArmor);
// console.log(
//   'Гравець з бронежилетом і каскою:',
//   playerWithArmorAndHelmet.getStats(),
//   '| Захист:',
//   playerWithArmorAndHelmet.getProtectionLevel()
// );

// ===============bridge======================================
// // інтерфейс
// interface Color {
//   applyColor(): string;
// }

// class RedColor implements Color {
//   applyColor() {
//     return 'червоного кольору.';
//   }
// }

// class BlueColor implements Color {
//   applyColor() {
//     return 'синього кольору.';
//   }
// }

// // Абстракція для моделі мопеда
// abstract class Moped {
//   protected color: Color;

//   constructor(color: Color) {
//     this.color = color;
//   }

//   abstract displayDetails(): string;
// }

// // Конкретні моделі мопедів
// class AlphaMoped extends Moped {
//   displayDetails() {
//     return `Мопед Альфа ${this.color.applyColor()}`;
//   }
// }

// class KarpatyMoped extends Moped {
//   displayDetails() {
//     return `Мопед Карпати ${this.color.applyColor()}`;
//   }
// }

// // Використання
// const alphaRed = new AlphaMoped(new RedColor());
// const karpatyBlue = new KarpatyMoped(new BlueColor());

// function getDetails(moped: Moped) {
//   const result = moped.displayDetails();
//   console.log(result);
// }

// getDetails(karpatyBlue);
// getDetails(alphaRed);

// ===============facade=====================================
// // Підсистема 1: Двигун мопеда
// class Engine {
//   start() {
//     console.log('Двигун запущено');
//   }

//   stop() {
//     console.log('Двигун зупинено');
//   }
// }

// // Підсистема 2: Ліхтарі мопеда
// class Lights {
//   turnOn() {
//     console.log('Ліхтарі включені');
//   }

//   turnOff() {
//     console.log('Ліхтарі вимкнено');
//   }
// }

// // Підсистема 3: Кермо мопеда
// class Handlebar {
//   turnLeft() {
//     console.log('Кермо повернуте наліво');
//   }

//   turnRight() {
//     console.log('Кермо повернуте направо');
//   }
// }

// // Підсистема 4: Колеса мопеда
// class Wheels {
//   startMoving() {
//     console.log('Колеса почали рухатись');
//   }

//   stopMoving() {
//     console.log('Колеса зупинились');
//   }
// }

// // Facade: спрощений інтерфейс для мопеда Альфа
// class AlphaMopedFacade {
//   private readonly engine: Engine;
//   private readonly lights: Lights;
//   private readonly handlebar: Handlebar;
//   private readonly wheels: Wheels;

//   constructor() {
//     this.engine = new Engine();
//     this.lights = new Lights();
//     this.handlebar = new Handlebar();
//     this.wheels = new Wheels();
//   }

//   startMoped() {
//     this.lights.turnOn();
//     this.engine.start();
//     this.wheels.startMoving();
//     console.log('Мопед готовий до поїздки');
//   }

//   stopMoped() {
//     this.wheels.stopMoving();
//     this.engine.stop();
//     this.lights.turnOff();
//     console.log('Мопед зупинено');
//   }

//   turnLeft() {
//     this.handlebar.turnLeft();
//   }

//   turnRight() {
//     this.handlebar.turnRight();
//   }
// }

// // Клієнтський код
// const moped = new AlphaMopedFacade();

// moped.startMoped(); // Запуск мопеда
// moped.turnLeft(); // Поворот наліво
// moped.stopMoped(); // Зупинка мопеда

// ==============proxy========================================
// // Інтерфейс, який описує поведінку сервісу
// interface DataService {
//   getData(): string;
// }

// // Реальний сервіс, який містить основну бізнес-логіку
// class RealDataService implements DataService {
//   getData(): string {
//     return 'Дані з сервісу.';
//   }
// }

// // Проксі-сервіс, який додає додаткову логіку, наприклад кешування
// class CachedDataServiceProxy implements DataService {
//   private readonly realDataService: RealDataService;
//   private cachedData: string | null = null;

//   constructor(realDataService: RealDataService) {
//     this.realDataService = realDataService;
//   }

//   getData(): string {
//     if (!this.cachedData) {
//       console.log('Завантаження даних із основного сервісу...');
//       this.cachedData = this.realDataService.getData();
//     } else {
//       console.log('Повернення кешованих даних.');
//     }
//     return this.cachedData;
//   }
// }

// // Приклад використання
// const cachedProxy = new CachedDataServiceProxy(new RealDataService());

// function clientCode(data: DataService) {
//   data.getData();
// }

// clientCode(cachedProxy); // Завантаження даних із основного сервісу...
// clientCode(cachedProxy); // Повернення кешованих даних.

// ===========composite=====================================
// // Абстрактний клас Компонент
// abstract class Component {
//   abstract displayDetails(): void;
//   abstract getPrice(): number;
// }

// // Конкретний компонент: частина мопеда
// class MopedPart extends Component {
//   private readonly name: string;
//   private readonly price: number;

//   constructor(name: string, price: number) {
//     super();
//     this.name = name;
//     this.price = price;
//   }

//   displayDetails(): void {
//     console.log(`Part: ${this.name}, Price: ${this.price}₴`);
//   }

//   getPrice(): number {
//     return this.price;
//   }
// }

// // Композитний компонент: мопед
// class Moped extends Component {
//   private readonly name: string;
//   private readonly parts: Component[] = [];

//   constructor(name: string) {
//     super();
//     this.name = name;
//   }

//   addPart(part: Component): void {
//     this.parts.push(part);
//   }

//   removePart(part: Component): void {
//     const idx = this.parts.indexOf(part);
//     if (idx !== -1) this.parts.splice(idx, 1);
//   }

//   displayDetails(): void {
//     console.log(`Moped: ${this.name}`);
//     for (const part of this.parts) {
//       part.displayDetails();
//     }
//   }

//   getPrice(): number {
//     return this.parts.reduce((total, part) => total + part.getPrice(), 0);
//   }
// }

// // Використання
// const alphaMoped = new Moped('Alpha');

// // Додаємо частини мопеда з цінами
// const frame = new MopedPart('Frame', 1000);
// const engine = new MopedPart('Engine', 5000);
// const wheels = new MopedPart('Wheels', 2000);
// const handlebar = new MopedPart('Handlebar', 50);

// alphaMoped.addPart(frame);
// alphaMoped.addPart(engine);
// alphaMoped.addPart(wheels);
// alphaMoped.addPart(handlebar);
// // Видаляємо додану частину (наприклад, "Handlebar")
// alphaMoped.removePart(handlebar);
// // Виведення ієрархії мопеда та загальної ціни
// alphaMoped.displayDetails();
// console.log(`Total Price: ${alphaMoped.getPrice()}₴`);

// ===============Flyweight==================================
// // Інтерфейс Flyweight
// interface IBook {
//   id: number;
//   title: string;
//   author: string;
// }

// // Flyweight
// class Book implements IBook {
//   constructor(
//     public readonly id: number,
//     public readonly title: string,
//     public readonly author: string
//   ) {}
// }

// // Flyweight Factory для кешування книг
// class BookFactory {
//   private static readonly bookCache: Map<number, Book> = new Map();

//   static getBook(id: number, title: string, author: string = 'user'): Book {
//     if (!this.bookCache.has(id)) {
//       console.log(`Creating new book: ${title} by ${author}`);
//       this.bookCache.set(id, new Book(id, title, author));
//     }
//     return this.bookCache.get(id)!;
//   }

//   static getCacheSize(): number {
//     return this.bookCache.size;
//   }
// }

// // Використання
// const book1 = BookFactory.getBook(1, '1984', 'George Orwell');
// const book2 = BookFactory.getBook(2, 'To Kill a Mockingbird', 'Harper Lee');
// const book3 = BookFactory.getBook(1, '1984', 'George Orwell'); // Взято з кешу

// console.log(book1 === book3); // true, оскільки об'єкт береться з кешу
// console.log(`Cache size: ${BookFactory.getCacheSize()}`); // 2

// ==================================================
// ---------------behavioral-------------------------
// ==================================================

// ===========Strategy================================
// // Інтерфейс стратегії
// interface PaymentStrategy {
//   pay(amount: number): void;
// }

// // Реалізація стратегії оплати через кредитну картку
// class CreditCardPayment implements PaymentStrategy {
//   constructor(private readonly cardNumber: string) {}

//   pay(amount: number): void {
//     console.log(`Оплачено ${amount} грн за допомогою кредитної картки ${this.cardNumber}`);
//   }
// }

// // Реалізація стратегії оплати готівкою
// class CashPayment implements PaymentStrategy {
//   pay(amount: number): void {
//     console.log(`Оплачено ${amount} грн готівкою.`);
//   }
// }

// // Контекст (користувач стратегії)
// class PaymentProcessor {
//   private strategy: PaymentStrategy | null = null;

//   // Метод для встановлення стратегії
//   setStrategy(strategy: PaymentStrategy): void {
//     this.strategy = strategy;
//   }

//   // Виконання оплати
//   processPayment(amount: number): void {
//     if (!this.strategy) {
//       console.log('Стратегію оплати не встановлено');
//       return;
//     }
//     this.strategy.pay(amount);
//   }
// }

// // Використання
// const paymentProcessor = new PaymentProcessor();

// // Оплата через кредитну картку
// paymentProcessor.setStrategy(new CreditCardPayment('4434567898765432'));
// paymentProcessor.processPayment(1000);

// // Оплата готівкою
// paymentProcessor.setStrategy(new CashPayment());
// paymentProcessor.processPayment(700);

// ============Template Method============================
// // Абстрактний клас із шаблонним методом
// abstract class BouquetMaker {
//   public makeBouquet(): void {
//     this.prepareBase();
//     this.addFlowers();
//     this.addDecorations();
//     this.wrapBouquet();
//   }

//   // Спільні кроки
//   protected prepareBase(): void {
//     console.log('Підготовка основи для букета...');
//   }

//   protected wrapBouquet(): void {
//     console.log('Упаковка букета...');
//   }

//   // Кроки, які мають реалізовувати підкласи
//   protected abstract addFlowers(): void;
//   protected abstract addDecorations(): void;
// }

// // Клас для класичного букета
// class ClassicBouquetMaker extends BouquetMaker {
//   protected addFlowers(): void {
//     console.log('Додавання троянд та лілій...');
//   }

//   protected addDecorations(): void {
//     console.log('Додавання стрічки...');
//   }
// }

// // Клас для польового букета
// class WildBouquetMaker extends BouquetMaker {
//   protected addFlowers(): void {
//     console.log('Додавання ромашок, волошок та лаванди...');
//   }

//   protected addDecorations(): void {
//     console.log('Додавання сухоцвітів...');
//   }
// }

// // Використання
// const classicBouquet = new ClassicBouquetMaker();
// console.log('Приготування класичного букета:');
// classicBouquet.makeBouquet();

// const wildBouquet = new WildBouquetMaker();
// console.log('\nПриготування польового букета:');
// wildBouquet.makeBouquet();

// ================Visitor============================
// // Інтерфейс для відвідувача
// interface FlowerVisitor {
//   visitRose(rose: Rose): void;
//   visitTulip(tulip: Tulip): void;
//   visitDaisy(daisy: Daisy): void;
// }

// // Інтерфейс для квітів
// interface Flower {
//   accept(visitor: FlowerVisitor): void;
// }

// // Конкретна квітка: Троянда
// class Rose implements Flower {
//   constructor(public price: number) {}

//   getName(): string {
//     return 'Rose';
//   }

//   accept(visitor: FlowerVisitor): void {
//     visitor.visitRose(this);
//   }
// }

// // Конкретна квітка: Тюльпан
// class Tulip implements Flower {
//   constructor(public price: number) {}

//   getName(): string {
//     return 'Tulip';
//   }

//   accept(visitor: FlowerVisitor): void {
//     visitor.visitTulip(this);
//   }
// }

// // Конкретна квітка: Ромашка
// class Daisy implements Flower {
//   constructor(public price: number) {}

//   getName(): string {
//     return 'Daisy';
//   }

//   accept(visitor: FlowerVisitor): void {
//     visitor.visitDaisy(this);
//   }
// }

// // Конкретний відвідувач для підрахунку вартості букета
// class PriceCalculatorVisitor implements FlowerVisitor {
//   private totalPrice = 0;

//   visitRose(rose: Rose): void {
//     this.totalPrice += rose.price;
//   }

//   visitTulip(tulip: Tulip): void {
//     this.totalPrice += tulip.price;
//   }

//   visitDaisy(daisy: Daisy): void {
//     this.totalPrice += daisy.price;
//   }

//   getTotalPrice(): number {
//     return this.totalPrice;
//   }
// }

// // Конкретний відвідувач для створення опису букета
// class DescriptionVisitor implements FlowerVisitor {
//   private readonly description: string[] = [];

//   visitRose(rose: Rose): void {
//     this.description.push(rose.getName());
//   }

//   visitTulip(tulip: Tulip): void {
//     this.description.push(tulip.getName());
//   }

//   visitDaisy(daisy: Daisy): void {
//     this.description.push(daisy.getName());
//   }

//   getDescription(): string {
//     return this.description.join(', ');
//   }
// }

// // Використання
// const bouquetArr: Flower[] = [new Rose(700), new Tulip(200), new Daisy(70)];

// const priceCalculator = new PriceCalculatorVisitor();
// const descriptionVisitor = new DescriptionVisitor();

// function clientCode(bouquet: Flower[], visitor: FlowerVisitor) {
//   bouquet.forEach(flower => flower.accept(visitor));
// }

// clientCode(bouquetArr, descriptionVisitor);
// clientCode(bouquetArr, priceCalculator);

// console.log(`Загальна вартість букета: ${priceCalculator.getTotalPrice()}грн.`);
// console.log(`Опис букета: ${descriptionVisitor.getDescription()}.`);

// ================Mediator============================
// // Інтерфейс Посередника
// interface Mediator {
//   notify(sender: object, message: string): void;
// }

// // Конкретний Посередник
// class WebMediator implements Mediator {
//   private readonly frontend: Frontend;
//   private readonly backend: Backend;

//   constructor(frontend: Frontend, backend: Backend) {
//     this.frontend = frontend;
//     this.frontend.setMediator(this);

//     this.backend = backend;
//     this.backend.setMediator(this);
//   }

//   notify(sender: object, message: string): void {
//     switch (sender) {
//       case this.frontend:
//         console.log('Посередник: Frontend надсилає повідомлення до Backend.');
//         this.backend.receiveMessage(message);
//         break;
//       case this.backend:
//         console.log('Посередник: Backend надсилає повідомлення до Frontend.');
//         this.frontend.receiveMessage(message);
//         break;
//       default:
//         console.log('Посередник: Невідоме джерело повідомлення.');
//     }
//   }
// }

// // Базовий клас для компонентів
// class BaseComponent {
//   protected mediator: Mediator | null = null;

//   setMediator(mediator: Mediator): void {
//     this.mediator = mediator;
//   }
// }

// // Конкретні компоненти
// class Frontend extends BaseComponent {
//   sendMessage(message: string): void {
//     console.log(`Frontend: Sending message: "${message}"`);
//     if (this.mediator) {
//       this.mediator.notify(this, message);
//     }
//   }

//   receiveMessage(message: string): void {
//     console.log(`Frontend: Received message: "${message}"`);
//   }
// }

// class Backend extends BaseComponent {
//   sendMessage(message: string): void {
//     console.log(`Backend: Sending message: "${message}"`);
//     if (this.mediator) {
//       this.mediator.notify(this, message);
//     }
//   }

//   receiveMessage(message: string): void {
//     console.log(`Backend: Received message: "${message}"`);
//   }
// }

// // Використання
// const frontend = new Frontend();
// const backend = new Backend();

// const mediator = new WebMediator(frontend, backend);

// console.log('Клієнт: Frontend надсилає повідомлення.');
// frontend.sendMessage('Hello from Frontend!');

// console.log('\nКлієнт: Backend надсилає повідомлення.');
// backend.sendMessage('Hello from Backend!');

// ==================Observer================================
// // Інтерфейс спостерігача (підписника)
// interface Observer {
//   update(flowerName: string): void;
// }

// // Інтерфейс суб'єкта (магазину)
// interface Subject {
//   addObserver(observer: Observer): void;
//   removeObserver(observer: Observer): void;
//   notifyObservers(flowerName: string): void;
// }

// // Реалізація суб'єкта (Інтернет-магазин)
// class FlowerShop implements Subject {
//   private observers: Observer[] = [];

//   public addObserver(observer: Observer): void {
//     this.observers.push(observer);
//   }

//   public removeObserver(observer: Observer): void {
//     this.observers = this.observers.filter(obs => obs !== observer);
//   }

//   public notifyObservers(flowerName: string): void {
//     for (const observer of this.observers) {
//       observer.update(flowerName);
//     }
//   }

//   public addNewFlower(flowerName: string): void {
//     console.log(`\nFlowerShop: Додано нову квітку - ${flowerName}`);
//     this.notifyObservers(flowerName);
//   }
// }

// // Реалізація спостерігача (Клієнта)
// class Customer implements Observer {
//   constructor(private readonly name: string) {}

//   public update(flowerName: string): void {
//     console.log(`${this.name}: Сповіщення - доступна нова квітка "${flowerName}"`);
//   }
// }

// // Використання
// const flowerShop = new FlowerShop();

// const customer1 = new Customer('Олена');
// const customer2 = new Customer('Максим');
// const customer3 = new Customer('Анна');

// // Підписуємо клієнтів
// flowerShop.addObserver(customer1);
// flowerShop.addObserver(customer2);
// flowerShop.addObserver(customer3);

// // Додаємо нові квіти
// flowerShop.addNewFlower('Троянда');
// flowerShop.addNewFlower('Орхідея');

// // Відписуємо одного з клієнтів
// flowerShop.removeObserver(customer2);

// // Додаємо ще одну квітку
// flowerShop.addNewFlower('Лілія');

// =================State====================
// // Інтерфейс стану гри
// interface GameState {
//   startRound(game: CSGOGame): void;
//   play(game: CSGOGame): void;
//   endRound(game: CSGOGame): void;
// }

// // Стан: Очікування гравців
// class WaitingForPlayersState implements GameState {
//   startRound(game: CSGOGame): void {
//     console.log('Гравці підключені. Починаємо раунд!');
//     game.setState(new RoundInProgressState());
//   }

//   play(): void {
//     console.log('Не можна почати гру без усіх гравців.');
//   }

//   endRound(): void {
//     console.log('Гра ще не розпочалася.');
//   }
// }

// // Стан: Гра триває
// class RoundInProgressState implements GameState {
//   startRound(): void {
//     console.log('Раунд запущений!');
//   }

//   play(game: CSGOGame): void {
//     console.log('Гравці виконують завдання.');
//     // Емулюємо завершення раунду
//     const winner = Math.random() > 0.5 ? 'Терористи' : 'Контртерористи';

//     console.log(`${winner} перемогли у цьому раунді!`);
//     game.setState(new RoundEndState());
//   }

//   endRound(): void {
//     console.log('Гра ще триває. Завершіть раунд!');
//   }
// }

// // Стан: Кінець раунду
// class RoundEndState implements GameState {
//   startRound(game: CSGOGame): void {
//     console.log('Починаємо новий раунд!');
//     game.setState(new RoundInProgressState());
//   }

//   play(): void {
//     console.log('Раунд завершено. Почніть новий раунд.');
//   }

//   endRound(): void {
//     console.log('Раунд вже завершено.');
//   }
// }

// // Контекст: Гра CS:GO
// class CSGOGame {
//   private state: GameState;

//   constructor() {
//     this.state = new WaitingForPlayersState();
//   }

//   setState(state: GameState): void {
//     this.state = state;
//   }

//   startRound(): void {
//     this.state.startRound(this);
//   }

//   play(): void {
//     this.state.play(this);
//   }

//   endRound(): void {
//     this.state.endRound(this);
//   }
// }

// // Використання
// const game = new CSGOGame();

// game.play(); // Не можна почати гру без усіх гравців.
// game.startRound(); // Гравці підключені. Починаємо раунд!
// game.play(); // Раунд у розпалі! Гравці виконують завдання. (визначається переможець)
// game.play(); // Раунд завершено. Почніть новий раунд.
// game.startRound(); // Починаємо новий раунд!

// ==================Iterator================================
// // Інтерфейс ітератора
// interface Iterator<T> {
//   next(): IteratorResult<T>;
//   hasNext(): boolean;
// }

// // Інтерфейс колекції
// interface FlowerCollection {
//   createIterator(): Iterator<Flower>;
// }

// // Інтерфейс товару
// interface Flower {
//   name: string;
//   price: number;
//   category: string;
// }

// // Конкретний ітератор для квітів
// class FlowerIterator implements Iterator<Flower> {
//   private index: number = 0;

//   constructor(private readonly flowers: Flower[]) {}

//   next(): IteratorResult<Flower> {
//     if (this.hasNext()) {
//       return {
//         done: false,
//         value: this.flowers[this.index++],
//       };
//     }
//     return {
//       done: true,
//       value: undefined,
//     };
//   }

//   hasNext(): boolean {
//     return this.index < this.flowers.length;
//   }
// }

// // Колекція "Букети"
// class BouquetCollection implements FlowerCollection {
//   private readonly bouquets: Flower[] = [];

//   addBouquet(name: string, price: number): void {
//     this.bouquets.push({ name, price, category: 'Букет' });
//   }

//   createIterator(): Iterator<Flower> {
//     return new FlowerIterator(this.bouquets);
//   }
// }

// // Колекція "Кімнатні рослини"
// class IndoorPlantCollection implements FlowerCollection {
//   private readonly plants: Flower[] = [];

//   addPlant(name: string, price: number): void {
//     this.plants.push({ name, price, category: 'Кімнатна рослина' });
//   }

//   createIterator(): Iterator<Flower> {
//     return new FlowerIterator(this.plants);
//   }
// }

// // Клас для виведення товарів
// class FlowerShop {
//   constructor(private readonly collections: FlowerCollection[]) {}

//   displayAllFlowers(): void {
//     this.collections.forEach(collection => {
//       const iterator = collection.createIterator();

//       let result = iterator.next();
//       while (!result.done) {
//         const flower = result.value;
//         console.log(`${flower.name} (${flower.category}) - ${flower.price.toFixed(2)}₴`);
//         result = iterator.next();
//       }
//       console.log('\n');
//     });
//   }
// }

// // Використання
// const bouquets = new BouquetCollection();

// bouquets.addBouquet('Романтичний букет', 499.99);
// bouquets.addBouquet('Весільний букет', 895.99);

// const indoorPlants = new IndoorPlantCollection();

// indoorPlants.addPlant('Фікус', 197.99);
// indoorPlants.addPlant('Орхідея', 293.99);

// const flowerShop = new FlowerShop([bouquets, indoorPlants]);
// flowerShop.displayAllFlowers();

// ===============Chain of Command=====================
// Інтерфейс для обробників
interface Middleware {
  setNext(handler: Middleware): Middleware;
  handle(request: HttpRequest): string | null;
}

// Клас для запитів
class HttpRequest {
  constructor(
    public user: string | null,
    public token: string | null,
    public data: any
  ) {}
}

// Базовий клас обробника
abstract class AbstractMiddleware implements Middleware {
  private next: Middleware | null = null;

  public setNext(handler: Middleware): Middleware {
    this.next = handler;
    return handler;
  }

  public handle(request: HttpRequest): string | null {
    if (this.next) {
      return this.next.handle(request);
    }
    return null;
  }
}

// Конкретні обробники
class AuthMiddleware extends AbstractMiddleware {
  public handle(request: HttpRequest): string | null {
    if (!request.user || !request.token) {
      return 'AuthMiddleware: Аутентифікація не вдалася.';
    }
    console.log('AuthMiddleware: Аутентифікація пройшла успішно.');
    return super.handle(request);
  }
}

class PermissionMiddleware extends AbstractMiddleware {
  public handle(request: HttpRequest): string | null {
    if (request.user !== 'admin') {
      return 'PermissionMiddleware: Доступ заборонений.';
    }
    console.log('PermissionMiddleware: Доступ дозволений.');
    return super.handle(request);
  }
}

class ValidationMiddleware extends AbstractMiddleware {
  public handle(request: HttpRequest): string | null {
    if (!request.data || typeof request.data !== 'object') {
      return 'ValidationMiddleware: Невірні дані.';
    }
    console.log('ValidationMiddleware: Дані правильні.');
    return super.handle(request);
  }
}

// Використання
const auth = new AuthMiddleware();
const permission = new PermissionMiddleware();
const validation = new ValidationMiddleware();

// Створюємо ланцюг
auth.setNext(permission).setNext(validation);

// Тестуємо з різними запитами
const requests = [
  new HttpRequest(null, null, { key: 'value' }), // Неавторизований запит
  new HttpRequest('user', 'token123', null), // Немає даних
  new HttpRequest('admin', 'token123', { key: 'value' }), // Успішний запит
];

for (const request of requests) {
  console.log('Обробка нового запиту...');
  const result = auth.handle(request);
  if (result) {
    console.log(result);
  } else {
    console.log('Запит оброблений успішно.');
  }
  console.log('----------------------------');
}
