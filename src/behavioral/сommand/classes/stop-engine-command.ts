import { Command } from '../interfaces/ICommand';
import { Moped } from './moped';

export class StopEngineCommand implements Command {
  private readonly moped: Moped;

  constructor(moped: Moped) {
    this.moped = moped;
  }

  execute(): void {
    this.moped.stopEngine();
  }
}
