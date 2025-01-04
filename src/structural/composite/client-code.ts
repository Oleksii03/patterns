import { Moped } from './classes/moped';
import { MopedPart } from './classes/moped-part';

const alphaMoped = new Moped('Alpha');

// Додаємо частини мопеда з цінами
const frame = new MopedPart('Frame', 1000);
const engine = new MopedPart('Engine', 5000);
const wheels = new MopedPart('Wheels', 2000);
const handlebar = new MopedPart('Handlebar', 50);

alphaMoped.addPart(frame);
alphaMoped.addPart(engine);
alphaMoped.addPart(wheels);
alphaMoped.addPart(handlebar);
// Видаляємо додану частину (наприклад, "Handlebar")
alphaMoped.removePart(handlebar);
// Виведення ієрархії мопеда та загальної ціни
alphaMoped.displayDetails();

console.log(`Total Price: ${alphaMoped.getPrice()}₴`);
