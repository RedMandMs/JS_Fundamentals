import { Category } from './../enums';
import { Book } from './../interfaces';

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.splice(2, inventory.length);
}

export function getAllBooks(): Array<Book> {
    let books: Array<Book> = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
    return books;
}

export function logFirstAvailable(books: Array<Book> = getAllBooks()): void {
    console.log(`Всего книг: ${books.length}`);
    for (let book of books) {
        if (book.available) {
            console.log(`Первая доступная книга: ${book.title}`);
            break;
        }
    }
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();
    const filtredTitles: string[] = [];
    for (let book of books) {
        if (book.category == category) {
            filtredTitles.push(book.title);
        }
    }
    return filtredTitles;
}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

export function getBookByID(id: number): Book | undefined {
    return getAllBooks().find(book => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
    return name + id;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Creating customer ${name}`);

    if (age) {
        console.log(`Age: ${age}`);
    }

    if (city) {
        console.log(`City: ${city}`);
    }

}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(customer);
    return bookIDs.filter(id =>
        getBookByID(id).available)
        .map(id => getBookByID(id).title);
}

export function getTitles(available: boolean): string[];
export function getTitles(author: string): string[];
export function getTitles(property: any): string[] {
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

export function printBook(book: Book) {
    console.log(`${book.title} by ${book.author}`);
}

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

export interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            let bookTitles: Array<string> = getBookTitlesByCategory(category);
            if (bookTitles.length > 0) {
                callback(null, bookTitles);
            } else {
                throw new Error("No books found.");
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000)
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`Just error: ${err.message}`);
    } else {
        console.log(`Found the following titles:`);
        console.log(titles.toString());

    }
}

export function getBooksByCategoryPromise(cat: Category): Promise<string[]> {

    let p: Promise<string[]> = new Promise((resolve, reject) => {

        setTimeout(() => {
            let foundBooks: string[] = getBookTitlesByCategory(cat);

            if (foundBooks.length > 0) {
                resolve(foundBooks);
            }
            else {
                reject('No books found for that category.');
            }
        }, 2000);
    });

    return p;
}

export async function logSearchResults(category: Category) {
    let foundBooks = await getBooksByCategoryPromise(category);
    console.log(foundBooks);
}

