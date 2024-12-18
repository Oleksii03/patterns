import { RoseBouquet } from './rose-bouquet';
import { Bouquet } from './interface';

const originalBouquet: Bouquet = new RoseBouquet(12, 'Red', true);
const newBouquet = originalBouquet.clone();

newBouquet.setQuantity(24);
newBouquet.setColor('yellow');
newBouquet.setNeedsWrapping(false);

console.log(originalBouquet);
console.log(newBouquet);
