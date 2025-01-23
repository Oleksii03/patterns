import { HttpRequest } from '../utils/http-request';
import { AbstractMiddleware } from '../base/fbstract-middleware';

export class ValidationMiddleware extends AbstractMiddleware {
  public handle(request: HttpRequest): string | null {
    if (!request.data || typeof request.data !== 'object') {
      return 'ValidationMiddleware: Невірні дані.';
    }
    console.log('ValidationMiddleware: Дані правильні.');
    return super.handle(request);
  }
}
