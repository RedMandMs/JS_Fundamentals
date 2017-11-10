console.log('Objects');

// Task 01
// Реализовать функцию-конструктор Tune(song, artist) для создания объектов
// с публичными свойствами title (получает значение song), artist и методом concat(),
// который возвращает конкатенацию значений свойств title и artist.
// Создать несколько объектов. Вызвать их метод concat().

console.log("Task 01");
{
    let Tune = function (song, artist) {
        this.title = song;
        this.artist = artist;
        this.concat = function () {
            return `${this.artist} - ${this.title}`;
        };
    };
    console.log(new Tune("Let it be", "Beatles").concat());
    console.log(new Tune("House of rusing sun", "Animals").concat());
    console.log(new Tune("Stair to haven", "Led Zepelin").concat());
}

// Task 02
// Реализовать функцию-конструктор Tune(song, artist) для создания объектов
// с приватными свойствами title (получает значение song), artist и публичным
// методом concat (), который возвращает конкатенацию значений свойств
// title и artist.
// Создать несколько объектов. Вызвать их метод concat().

console.log("Task 02");
{
    let Tune = function (song, artist) {
        this.concat = function () {
            return `${artist} - ${song}`;
        };
    };
    console.log(new Tune("Smoke on the water", "Deep Purple").concat());
    console.log(new Tune("Hey Joe", "Jimi Hendrix").concat());
    console.log(new Tune("Mr. Brightside", "The Killers").concat());
}

// Task 03
// Реализовать для предыдущего объекта метод addCategory(categoryName),
// который принимает название категории и устанавливает его в соответствующее
// публичное свойство.
// Добавить категорию к объекту, вывести объект в консоль.

console.log("Task 03");
{
    let Tune = function (song, artist) {
        this.categories = [];
        this.concat = function () {
            return `${artist} - ${song}`;
        };
        this.addCategory = function (categoryName) {
            this.categories.push(categoryName);
        };
    };
    let acdcBIB = new Tune("Back In Black", "AC/DC");
    acdcBIB.addCategory("Rock'n'Roll")
    console.log(acdcBIB.categories.toString());

}

// Task 04
// Расширить прототип объекта String методом exclaim() если его нет в прототипе,
// который добавляет к строке знак восклицания и выводит строку в консоль.

console.log("Task 04");
{
    if (!("exclaim" in String.prototype)) {
        String.prototype.exclaim = function () {
            console.log(`${this.toString()}!`);
        }
    }
    let testString = 'Тут будет восклицательный знак';
    testString.exclaim();
}

// Task 05
// Создать функцию-конструктор Book(title, author). Добавить два метода:
// getTitle, getAuthor. Создать функцию-конструктор
// TechBook(title, author, category). Передать параметры title, author
// функции-конструктору Book. Добавить два метода: getCategory, getBook –
// возвращает строку с параметрами.
// 1. Для реализации наследования используйте Object.create();
// 2. Используйте синтаксис классов.

console.log("Task 05");
{
    let Book = function (title, author) {
        this.getTitle = function () {
            return title;
        }
        this.getAuthor = function () {
            return author;
        }
    }
    let TechBook = function (title, author, category) {
        let techBook = Object.create(new Book(title, author));
        techBook.getCategory = function () {
            return category;
        }
        techBook.getBook = function () {
            return `${author} - ${title} - ${category}`;
        }
        return techBook;
    }
    let techBook = new TechBook("JS - forever", "Special one", "JavaScript");
    console.log(techBook.getTitle());
    console.log(techBook.getBook());
}
{
    class Book {
        constructor(title, author) {
            this.getTitle = function () {
                return title
            }
            this.getAuthor = function () {
                return author;
            }
        }
    };
    class TechBook extends Book {
        constructor(title, author, category) {
            super(title, author);
            this.getCategory = function () {
                return category;
            }
            this.getBook = function () {
                return `${author} - ${title} - ${category}`;
            }
        }
    }
    let techBook = new TechBook("JS - forever", "Special one", "JavaScript");
    console.log(techBook.getTitle());
    console.log(techBook.getBook());
}

// Task 06
// Cоздать объект data и сконфигурирвать его свойства:
// 1. id: значение = 1, изменяемое.
// 2. type: значение = "primary", перечисляемое
// 3. category: getter возвращает значение поля _category,
//    setter устанавливает значение поля _category, перечисляемое, конфигурируемое.
// Используя for-in вывести свойства объекта.

console.log("Task 06");
{
    let data = {}
    Object.defineProperties(data,
        {
            'id': {
                value: 1,
                writable: true
            },
            'type': {
                value: 'primary',
                enumerable: true
            },
            'category': {
                get: function () {
                    return this._category;
                },
                set: function (category) {
                    this._category = category;
                },
                configurable: true,
                enumerable: true
            }
        });
    for (let prop in data) {
        console.log(`data[${prop}] = ${data[prop]}`);
    }
}

// Task 07
// Создать литерал объекта с двумя свойствами. Запретить расширять объект.

console.log("Task 07");
{
    let data = {
        prop1: 1,
        prop2: 2
    };
    Object.preventExtensions(data);
    data.prop3 = 3;
    console.log(data.prop3);
}

// Task 08
// Создать функцию-конструктор для конструирования объектов Person.
// Создать два метода setFirstName() и setLastName(). Методы должны вызываться
// в цепочке.

console.log("Task 08");
{
    let Person = function () {
        this.setFirstName = function (firstName) {
            this.firstName = firstName;
            return this;
        };
        this.setLastName = function (lastName) {
            this.lastName = lastName;
            return this;
        };
    }
    let me = new Person().setFirstName("Sergey").setLastName("Vilgodskiy");
    console.log(`me: ${me.firstName} ${me.lastName}`);
}

// Task 09 TodoList App
// Реализовать класс «список задач» со следющим функционалом:
// Добавить задачу в список
// Получить и вывести в консоль список всех задач в формате "[new] Task 1",
// "[completed] Task2"
// Отметить указанную задачу как выполненную
// Удалить задачу из списка
// Отсортировать задачи по алфавиту по возрастанию или по убыванию
// Очистить список задач

console.log("Task 09");
{
    class Task {
        constructor(title) {
            this.title = title;
            this.isDone = false;
        };

        complite() {
            this.isDone = true;
            console.log(`${this.title} - is completed`);
        };
    }

    class TodoList {
        constructor() {
            this.taskList = [];
        };

        addTask(task) {
            this.taskList.push(task);
        };

        writeAlltasks() {
            for (let task of this.taskList) {
                console.log(`[${task.isDone ? `completed` : `new`}] ${task.title}`)
            }
        };

        deleteTask(task) {
            this.taskList.splice(this.taskList.indexOf(task), 1);
            console.log(`${task.title} - was deleted`);
        }
    }

    let todoList = new TodoList();
    let task1 = new Task('Task 1');
    let task2 = new Task('Task 2');
    let task3 = new Task('Task 3');
    todoList.addTask(task1);
    todoList.addTask(task2);
    todoList.addTask(task3);
    todoList.writeAlltasks();
    task2.complite();
    todoList.writeAlltasks();
    todoList.deleteTask(task1);
    todoList.writeAlltasks();
}

// Task 10
// Создать текущую дату и вывести ее в формате dd.mm.yyyy и dd Month yyyy

console.log("Task 10");
{
    let date = new Date();
    console.log(`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`);
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
    console.log(`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`);
}

// Task 11
// Есть строка «15.03.2016». Создать на ее основе объект Date

console.log("Task 11");
{
    let dateAr = '15.03.2016'.split('.');
    let tmp = dateAr[1];
    dateAr[1] = dateAr[0];
    dateAr[0] = tmp;
    let date = new Date(dateAr.join("/"));
    console.log(date.toString());
}

// Task 12
// Создать объект Date, который содержит завтрашнюю дату, первое число текущего
// месяца, последнее число текущего месяца

console.log("Task 12");
{
    Date.prototype.addDays = function (days) {
        var dat = new Date(this.valueOf());
        dat.setDate(dat.getDate() + days);
        return dat;
    };
    let firstDayOfMonth = new Date();
    firstDayOfMonth.setDate(1);
    let lastDayOfMonth = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth() + 1, 0);
    let dates = {
        tomorrow: new Date().addDays(1),
        firstDayOfMonth: firstDayOfMonth,
        lastDayOfMonth: lastDayOfMonth
    };
    for (prop in dates) {
        console.log(`${prop} : ${dates[prop].toString()}`);
    }
}

// Task 13
// Измерить время суммирования чисел от 1 до 1000.

console.log("Task 13");
{
    let start = new Date;
    let sum = 0;
    for (let i = 1; i <= 10000000; i++) {
        sum += i;
    }
    let finish = new Date();
    console.log(`${(finish.valueOf() - start.valueOf())} miliseconds`);
}

// Task 14
// Подсчитать количество дней с текущей даты до Нового года

console.log("Task 14");
{
    let today = new Date();
    let newYear = new Date(today.getFullYear() + 1, 0, 1);
    console.log(`До нового года: ${Math.round((newYear.valueOf() - today.valueOf()) / (1000 * 60 * 60 * 24))} дня(ей)`);
}






