import { Book } from './book';

export class BookFactory {
  private static readonly bookCache: Map<number, Book> = new Map();

  static getBook(id: number, title: string, author: string): Book {
    if (!this.bookCache.has(id)) {
      console.log(`Creating new book: ${title} by ${author}`);
      this.bookCache.set(id, new Book(id, title, author));
    }
    return this.bookCache.get(id)!;
  }

  static getCacheSize(): number {
    return this.bookCache.size;
  }
}
