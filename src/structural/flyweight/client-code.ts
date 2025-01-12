import { BookFactory } from './classes/book-factory';

const book1 = BookFactory.getBook(1, '1984', 'George Orwell');
const book2 = BookFactory.getBook(2, 'To Kill a Mockingbird', 'Harper Lee');
const book3 = BookFactory.getBook(1, '1984', 'George Orwell'); // Взято з кешу

console.log(book1 === book3); // true, оскільки об'єкт береться з кешу
console.log(`Cache size: ${BookFactory.getCacheSize()}`); // 2
