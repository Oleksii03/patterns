import { HttpRequest } from '../classes/utils/http-request';

export interface Middleware {
  setNext(handler: Middleware): Middleware;
  handle(request: HttpRequest): string | null;
}
