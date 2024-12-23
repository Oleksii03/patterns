import { PcGame } from '../interfaces';
import { ConsoleGame } from './console-game';

export class ConsoleToPcAdapter implements PcGame {
  private readonly consoleGame: ConsoleGame;

  constructor(consoleGame: ConsoleGame) {
    this.consoleGame = consoleGame;
  }

  launch(): string {
    return `${this.consoleGame.startOnConsole()} (адаптовано для запуску на ПК)`;
  }
}
