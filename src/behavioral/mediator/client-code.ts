import { WebMediator } from './classes/web-mediator';
import { Frontend } from './classes/frontend';
import { Backend } from './classes/backend';

const frontend = new Frontend();
const backend = new Backend();

const mediator = new WebMediator(frontend, backend);

console.log('Клієнт: Frontend надсилає повідомлення.');
frontend.sendMessage('Hello from Frontend!');

console.log('\nКлієнт: Backend надсилає повідомлення.');
backend.sendMessage('Hello from Backend!');
