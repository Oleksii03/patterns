import { Moped } from './classes/moped';
import { StartEngineCommand } from './classes/start-engine-command';
import { StopEngineCommand } from './classes/stop-engine-command';
import { RemoteControl } from './classes/remote-control';

const moped = new Moped();
const startEngine = new StartEngineCommand(moped);
const stopEngine = new StopEngineCommand(moped);

const remote = new RemoteControl();

remote.setCommand(startEngine);
remote.pressButton(); // Output: Мопед Альфа: двигун запущено!

remote.setCommand(stopEngine);
remote.pressButton(); // Output: Мопед Альфа: двигун вимкнено!
