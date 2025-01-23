import { HttpRequest } from '../utils/http-request';
import { AbstractMiddleware } from '../base/fbstract-middleware';

export class AuthMiddleware extends AbstractMiddleware {
  public handle(request: HttpRequest): string | null {
    if (!request.user || !request.token) {
      return 'AuthMiddleware: Аутентифікація не вдалася.';
    }
    console.log('AuthMiddleware: Аутентифікація пройшла успішно.');
    return super.handle(request);
  }
}
