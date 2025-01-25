import { PlayerMemento } from './player-memento';
import { Player } from './player';

export class GameHistory {
  private readonly history: PlayerMemento[] = [];

  constructor(private readonly player: Player) {}

  backup(): void {
    console.log(`GameHistory: Зберігаю стан гравця...`);
    this.history.push(this.player.save());
  }

  undo(): void {
    if (this.history.length === 0) {
      console.log(`GameHistory: Немає збережень для відновлення.`);
      return;
    }

    const memento = this.history.pop();
    console.log(`GameHistory: Відновлюю стан гравця...`);
    this.player.restore(memento!);
  }

  showHistory(): void {
    console.log(`GameHistory: Історія станів:`);
    this.history.forEach((memento, index) => {
      const state = memento.getState();
      console.log(
        `  Стан #${index + 1} - Health: ${state.health}, Armor: ${state.armor}, Position: ${state.position}`
      );
    });
  }
}
