import { AuthMiddleware } from './classes/handlers/auth-middleware';
import { PermissionMiddleware } from './classes/handlers/permission-middleware';
import { ValidationMiddleware } from './classes/handlers/validation-middleware';
import { HttpRequest } from './classes/utils/http-request';

const auth = new AuthMiddleware();
const permission = new PermissionMiddleware();
const validation = new ValidationMiddleware();

// Створюємо ланцюг
auth.setNext(permission).setNext(validation);

// Тестуємо з різними запитами
const requests = [
  new HttpRequest(null, null, { key: 'value' }), // Неавторизований запит
  new HttpRequest('user', 'token123', null), // Немає даних
  new HttpRequest('admin', 'token123', { key: 'value' }), // Успішний запит
];

for (const request of requests) {
  console.log('Обробка нового запиту...');
  const result = auth.handle(request);
  if (result) {
    console.log(result);
  } else {
    console.log('Запит оброблений успішно.');
  }
  console.log('----------------------------');
}
