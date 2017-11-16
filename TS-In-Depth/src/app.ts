import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes'
import RefBook from './encyclopedia'
import { purge } from './lib/utility-functions'
import Shelf from './shelf';


showHello("greeting", "Sergey");

function getAllBooks(): Array<Book> {
    let books: Array<Book> = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
    return books;
}

function logFirstAvailable(books: Array<Book> = getAllBooks()): void {
    console.log(`Всего книг: ${books.length}`);
    for (let book of books) {
        if (book.available) {
            console.log(`Первая доступная книга: ${book.title}`);
            break;
        }
    }
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();
    const filtredTitles: string[] = [];
    for (let book of books) {
        if (book.category == category) {
            filtredTitles.push(book.title);
        }
    }
    return filtredTitles;
}

function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

function getBookByID(id: number): Book | undefined {
    return getAllBooks().find(book => book.id === id);
}

function createCustomerID(name: string, id: number): string {
    return name + id;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Creating customer ${name}`);

    if (age) {
        console.log(`Age: ${age}`);
    }

    if (city) {
        console.log(`City: ${city}`);
    }

}

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(customer);
    return bookIDs.filter(id =>
        getBookByID(id).available)
        .map(id => getBookByID(id).title);
}

function getTitles(available: boolean): string[];
function getTitles(author: string): string[];
function getTitles(property: any): string[] {
    const resultBooksTitles: string[] = [];
    if (typeof property === 'string') {
        for (let book of getAllBooks()) {
            if (book.author == property) {
                resultBooksTitles.push(book.title);
            }
        }
    }
    if (typeof property === 'boolean') {
        for (let book of getAllBooks()) {
            if (book.available == property) {
                resultBooksTitles.push(book.title);
            }
        }
    }
    return resultBooksTitles;
}

function printBook(book: Book) {
    console.log(`${book.title} by ${book.author}`);
}

//---------------------------------------------------

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

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

let lib1 = new UniversityLibrarian();

try {
    lib1.assistFaculty = () => console.log('assistFaculty replacement method');
    lib1.teachCommunity = () => console.log('teachCommunity replacement method');    
} catch (error) {
    console.log(error.message);
}

lib1.assistFaculty();
lib1.teachCommunity();





