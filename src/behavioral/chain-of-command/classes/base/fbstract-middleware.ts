import { HttpRequest } from '../utils/http-request';
import { Middleware } from '../../interfaces/middleware';

export abstract class AbstractMiddleware implements Middleware {
  private next: Middleware | null = null;

  public setNext(handler: Middleware): Middleware {
    this.next = handler;
    return handler;
  }

  public handle(request: HttpRequest): string | null {
    if (this.next) {
      return this.next.handle(request);
    }
    return null;
  }
}
