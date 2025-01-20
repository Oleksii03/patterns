import { FlowerShop } from './classes/flower-shop';
import { Customer } from './classes/customer';

const flowerShop = new FlowerShop();

const customer1 = new Customer('Олена');
const customer2 = new Customer('Максим');
const customer3 = new Customer('Анна');

// Підписуємо клієнтів
flowerShop.addObserver(customer1);
flowerShop.addObserver(customer2);
flowerShop.addObserver(customer3);

// Додаємо нові квіти
flowerShop.addNewFlower('Троянда');
flowerShop.addNewFlower('Орхідея');

// Відписуємо одного з клієнтів
flowerShop.removeObserver(customer2);

// Додаємо ще одну квітку
flowerShop.addNewFlower('Лілія');
console.log('\n');
