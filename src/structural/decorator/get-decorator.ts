import { BasicPlayer } from './classes/basic-player';
import { ArmorDecorator } from './classes/armor-decorator';
import { HelmetDecorator } from './classes/helmet-decorator';

const basicPlayer = new BasicPlayer();
console.log(
  'Базовий гравець:',
  basicPlayer.getStats(),
  '| Захист:',
  basicPlayer.getProtectionLevel()
);

const playerWithArmor = new ArmorDecorator(basicPlayer);
console.log(
  'Гравець з бронежилетом:',
  playerWithArmor.getStats(),
  '| Захист:',
  playerWithArmor.getProtectionLevel()
);

const playerWithArmorAndHelmet = new HelmetDecorator(playerWithArmor);
console.log(
  'Гравець з бронежилетом і каскою:',
  playerWithArmorAndHelmet.getStats(),
  '| Захист:',
  playerWithArmorAndHelmet.getProtectionLevel()
);
