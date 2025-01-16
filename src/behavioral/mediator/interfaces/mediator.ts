export interface Mediator {
  notify(sender: object, message: string): void;
}
