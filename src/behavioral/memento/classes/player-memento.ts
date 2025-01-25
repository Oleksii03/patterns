export class PlayerMemento {
  constructor(
    private readonly health: number,
    private readonly armor: number,
    private readonly position: string
  ) {}

  getState(): { health: number; armor: number; position: string } {
    return {
      health: this.health,
      armor: this.armor,
      position: this.position,
    };
  }
}
