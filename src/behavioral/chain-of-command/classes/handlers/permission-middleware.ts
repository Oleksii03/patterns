import { HttpRequest } from '../utils/http-request';
import { AbstractMiddleware } from '../base/fbstract-middleware';

export class PermissionMiddleware extends AbstractMiddleware {
  public handle(request: HttpRequest): string | null {
    if (request.user !== 'admin') {
      return 'PermissionMiddleware: Доступ заборонений.';
    }
    console.log('PermissionMiddleware: Доступ дозволений.');
    return super.handle(request);
  }
}
