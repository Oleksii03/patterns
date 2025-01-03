import { Moped } from './classes/moped';
import { RedColor } from './classes/red-color';
import { BlueColor } from './classes/blue-color';
import { AlphaMoped } from './classes/alpha-moped';
import { KarpatyMoped } from './classes/karpaty-moped';

const alphaRed = new AlphaMoped(new RedColor());
const karpatyBlue = new KarpatyMoped(new BlueColor());

function getDetails(moped: Moped) {
  const result = moped.displayDetails();
  console.log(result);
}

getDetails(karpatyBlue);
getDetails(alphaRed);
