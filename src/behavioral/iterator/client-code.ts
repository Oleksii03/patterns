import { BouquetCollection } from './classes/bouquet-collection';
import { IndoorPlantCollection } from './classes/indoor-plant-collection';
import { FlowerShop } from './classes/flower-shop';

// Використання
const bouquets = new BouquetCollection();

bouquets.addBouquet('Романтичний букет', 499.99);
bouquets.addBouquet('Весільний букет', 895.99);

const indoorPlants = new IndoorPlantCollection();

indoorPlants.addPlant('Фікус', 197.99);
indoorPlants.addPlant('Орхідея', 293.99);

const flowerShop = new FlowerShop([bouquets, indoorPlants]);
flowerShop.displayAllFlowers();

console.log('----------------------------');
