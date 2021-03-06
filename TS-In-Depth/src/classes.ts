import * as Interfaces from './interfaces';
import { sealed, logger, writable } from './decorators';

@logger
class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`)
    };
    @writable(true)
    assistFaculty() {
        console.log('Assisting faculty.');
    }

    @writable(false)
    teachCommunity() {
        console.log('Teaching community.');
    }

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

export {UniversityLibrarian, ReferenceItem};