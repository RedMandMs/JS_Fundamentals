import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes'
import RefBook from './encyclopedia'
import {
    purge, getAllBooks, getBookTitlesByCategory, logFirstAvailable,
    logBookTitles, getBookByID, createCustomerID, createCustomer, сheckoutBooks,
    getTitles, showHello, printBook, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise,
    logSearchResults
} from './lib/utility-functions'
import Shelf from './shelf';
import "babel-polyfill";


showHello("greeting", "Sergey");

// console.log(getAllBooks());

// const allBooks = getAllBooks();

// logFirstAvailable(allBooks);

// const javaScriptBooks = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(javaScriptBooks);

// let myID : string = createCustomerID('Ann', 10);
// console.log(myID);

// let IdGenerator: (chars: string, num: number) => string;
// IdGenerator = (name: string, id: number) => `${name}${id}`;
// IdGenerator = createCustomerID;
// myID = IdGenerator('Ann', 20);
// console.log(myID);

// createCustomer('Ann');
// createCustomer('Boris', 6);
// createCustomer('Clara', 12, 'Atlanta');
// const javaScriptBooks = getBookTitlesByCategory();
// logBookTitles(javaScriptBooks);
// logFirstAvailable();

// let myBooks: string[] = сheckoutBooks('Ann', 1, 3, 4);
// myBooks.forEach(title => console.log(title));

// let checkedOutBooks:string[] = getTitles(false);
// checkedOutBooks.forEach(title => console.log(title));

// let myBook : Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged : (reason: string) => console.log(`Damaged: ${reason}`)
// } 
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// let logDamage: Logger;
// logDamage = (damage: string) => console.log('Damage log: ' + damage);
// logDamage('lost');

// let favoriteAuthor: Author = {
//     name: "Chack Palanik",
//     email: "chack_palanik@fightclub.com",
//     numBooksPublished: 15
// }

// let favoriteLibrarian: Librarian = {
//     name: "Luk sky Wolker",
//     email: "luk_sky_wolker@starwars.com",
//     department: 'spb',
//     assistCustomer: (custName: string) => console.log("Я сделяль!")
// }
// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = "Luk";
// favoriteLibrarian.assistCustomer('Dart Weyder');

// let ref : ReferenceItem = new ReferenceItem("Fight club", 1996);
// ref.printItem();
// ref.publisher = "atc";
// console.log(ref.publisher);

// let refBook: ReferenceItem = new RefBook("Cool encyclopedia", 2017, 2);
// refBook.printItem();
// refBook.printCitation();

// let inventory =
//     [
//         { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//         { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//         { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//         { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
//     ];

// console.log(purge(inventory));

// let numbers = [1, 2, 3, 4, 5];
// console.log(purge(numbers));

// let bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// let firstBook: Book = bookShelf.getFirst();
// console.log(firstBook.title);

// let magazines : Array<Magazine> =
// [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// let magazineShelf : Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(magazine => magazineShelf.add(magazine));
//console.log(magazineShelf.getFirst().title);

// console.log(bookShelf.find('Code Complete').title);
// magazineShelf.printTitles();

// let lib1 = new UniversityLibrarian();

// try {
//     lib1.assistFaculty = () => console.log('assistFaculty replacement method');
//     lib1.teachCommunity = () => console.log('teachCommunity replacement method');
// } catch (error) {
//     console.log(error.message);
// }

// lib1.assistFaculty();
// lib1.teachCommunity();

// Callback functions
// console.log('Beginning search...');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('Search submitted...');

// console.log('Beginning search...');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(`Found titles: ${titles}`);
//         return titles.length;
//     }, reason => { return 0; })
//     .then(numOfBooks => console.log(`Number of books found: ${numOfBooks}`))
//     .catch(reason => console.log(`Error: ${reason}`));
// console.log('Search submitted...');

// console.log('Beginning search...');
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => {
//         console.log(`Found titles: ${titles}`);
//         return titles.length;
//     }, reason => { return 0; })
//     .then(numOfBooks => console.log(`Number of books found: ${numOfBooks}`))
//     .catch(reason => console.log(`Error: ${reason}`));
// console.log('Search submitted...');

console.log('Beginning search...');
logSearchResults(Category.Software)
    .catch(reason => console.log(reason));
console.log('Search submitted...');







