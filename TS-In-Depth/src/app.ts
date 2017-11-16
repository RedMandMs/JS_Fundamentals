showHello("greeting", "Sergey");

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`)
    };
}

abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number){
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // };
    private _publisher: string;
    static department: string = "Spb";
    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    };

    printItem(): void{
        console.log(`${this.title} was pablished in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    };

    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem{
    constructor(title: string, year: number, public edition: number){
        super(title, year);
    }
    printItem(): void{
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
    printCitation(): void{
        console.log(`${this.title} - ${this.year}`)
    }
}

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

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular2
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

// let logDamage: DamageLogger;
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

let refBook: ReferenceItem = new Encyclopedia("Cool encyclopedia", 2017, 2);
refBook.printItem();
refBook.printCitation();





