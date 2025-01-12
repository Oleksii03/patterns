import { IBook } from '../interfaces/IBook';

export class Book implements IBook {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly author: string
  ) {}
}
