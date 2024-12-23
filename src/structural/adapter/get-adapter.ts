import { ConsoleGame } from './classes/console-game';
import { ConsoleToPcAdapter } from './classes/console-pc-adapter';

const consoleGame = new ConsoleGame();
const pcGameAdapter = new ConsoleToPcAdapter(consoleGame);

console.log(pcGameAdapter.launch());
