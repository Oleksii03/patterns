import { PlayerMemento } from './player-memento';

export class Player {
  private health: number = 100;
  private armor: number = 50;
  private position: string = 'Spawn';

  setState(health: number, armor: number, position: string): void {
    this.health = health;
    this.armor = armor;
    this.position = position;
    console.log(
      `Player: Стан змінено - Health: ${this.health}, Armor: ${this.armor}, Position: ${this.position}`
    );
  }

  getState(): { health: number; armor: number; position: string } {
    return Object.freeze({
      health: this.health,
      armor: this.armor,
      position: this.position,
    });
  }

  save(): PlayerMemento {
    console.log(`Player: Зберігаю стан...`);
    return new PlayerMemento(this.health, this.armor, this.position);
  }

  restore(memento: PlayerMemento): void {
    const state = memento.getState();
    this.health = state.health;
    this.armor = state.armor;
    this.position = state.position;
    console.log(
      `Player: Відновлено стан - Health: ${this.health}, Armor: ${this.armor}, Position: ${this.position}`
    );
  }
}
