import { ClassicBouquetMaker } from './classes/classic-bouquet-maker';
import { WildBouquetMaker } from './classes/wild-bouquet-maker';

// Використання
const classicBouquet = new ClassicBouquetMaker();
console.log('Приготування класичного букета:');
classicBouquet.makeBouquet();

const wildBouquet = new WildBouquetMaker();
console.log('\nПриготування польового букета:');
wildBouquet.makeBouquet();
