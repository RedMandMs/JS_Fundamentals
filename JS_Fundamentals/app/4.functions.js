console.log('Functions');


// Task 1. FDS
// Создайте функцию conc, которая должна конкатенировать два параметра a и b
// и возвращать строку. Используйте Function Declaration Statement (FDS).
// Вызовите функцию до ее объявления.
// Тестовые данные:
// a = '1', b = '1', result = '11'
// a = 1, b = 1, result = '11'

console.log("Task 01");
{
    console.log(conc('1', '1'));
    console.log(conc(1, 1));
    function conc(a, b) {
        return '' + a + b;
    }
}

// Task 2. FDE
// Создайте функцию comp, которая должна сравнивать два параметра a и b и
// возвращать 1, если они равны и - 1, если они не равны.
// Используйте Function Definition Expression (FDE). Вызовите функцию перед ее
// объявлением.
// Тестовые данные:
// a = 'abc', b = 'abc', result = 1
// a = 'abC', b = 'abc', result = -1

console.log("Task 02");
{
    let comp = function (a, b) {
        return a == b ? 1 : -1;
    }
    console.log(comp('abc', 'abc'));
    console.log(comp('abC', 'abc'));
}

// Task 3. AF
// Создайте анонимную функцию, которая должна выводить сообщение в коноль
// 'message in console'. Используйте ее как обработчик события click для кнопки.

console.log("Task 03");
{
    (function () {
        console.log('message in console');
    })();
}

// Task 4. NFE
// Создайте функцию fibo для вычисления чисел Фибоначчи по формуле
// F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. Используйте Named Function Expression (NFE)
// Создайте функцию factorial для вычисления факториала числа по формуле
// Fn = 1 * 2 *..*n. Используйте Named Function Expression (NFE).

console.log("Task 04");
{
    let fibo = function fib(k) {
        return (k == 0) ? 0 : ((k == 1) ? 1 : (fib(k - 1) + fib(k - 2)));
    }
    console.log('FIBO without memo:');
    console.timeEnd();
    console.time();
    console.log(fibo(0));
    console.log(fibo(1));
    console.log(fibo(2));
    console.log(fibo(3));
    console.log(fibo(4));
    console.log(fibo(5));
    console.log(fibo(6));
    console.log(fibo(7));
    console.timeEnd();

    let factorial = function fac(k) {
        return (k == 0) ? 0 : ((k == 1) ? 1 : (k * fac(k - 1)));
    }
    console.log('FACTORIAL::');
    console.log(factorial(1));
    console.log(factorial(2));
    console.log(factorial(3));
    console.log(factorial(4));
    console.log(factorial(5));
    console.log(factorial(6));
    console.log(factorial(7));
}

// Task 5. FC
// Получите тело и параметры функции от пользователя с помощью prompt
// (или проинициализируйте переменные строчными литералами). Создайте функцию
// на основе этой информации используя Function Constructor (FC).
// Вызовите эту функцию.

console.log("Task 05");
{
    let params = 'a,b,c';
    let body = 'return a * b * c';
    let fun = new Function(params, body);
    console.log(fun(1, 2, 3));
}

// Task 6. ArF
// Объявите массив arr = [1,8,3,5,12,7,9,11]
// Используя стрелочную функцию создать новый массив elem * elem < 100 и
// отсортировать его по возрастанию.

console.log("Task 06");
{
    let arr = [1, 8, 3, 5, 12, 7, 9, 11];
    console.log(arr.filter(elem => elem * elem < 100).sort((el1, el2) => el1 - el2).toString());
}

// Task 7. IIFE
// Напишите конструкцию, с помощью которой выполниться выше реализованная
// функция conc.

console.log("Task 07");
{
    console.log((function (a, b) {
        return '' + a + b;
    })(1, 1));
}

// Task 8. Arguments Object, Rest
// Создайте функцию parts, которая принимает несколько параметров.
// Каждый параметр – это группа предложений. Функция должна вырезать из параметра
// подстроку, начиная с символа двоеточие (:) и заканчивая символом точка (.).
// Функция должна возвращать массив подстрок.
// Используйте Function Definition Expression (FDE).
// Тестовые данные:
// param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas."
// param2 = "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black."
// result = [“cherries, oranges, apples, bananas”, “red, blue, yellow, black”].

console.log("Task 08");
{
    let parts = function () {
        let result = [];
        [...arguments].forEach(arg => {
            arg.split(":")
                .filter((sub, index) => index > 0)
                .forEach(sub => result.push(sub.split(".")[0]));
        });
        return result;
    };
    console.log(parts("This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas. This is the second sentence.",
        "This is a sentence with a list of items: red, blue, yellow, black.").toString());
}

// Task 9. Optional Arguments
// Создайте функцию find(testString, test), которая должна возвращать позицию
// строки test в строке testString. Если второй параметр не задан,
// используйте test = testString. Используйте Function Definition Expression (FDE).
// Тестовые данные:
// testString = 'abc', test ='b', result = 1
// testString = 'abc', result = 0
// testString = 'abc', test = 'd', result = -1
// testString = 'abc', test='a', test2='b', result = 0

console.log("Task 09");
{
    let find = function (testString, test = testString) {
        return testString.search(test);
    }
    console.log(find('abc', 'b'));
    console.log(find('abc'));
    console.log(find('abc', 'd'));
    console.log(find('abc', 'a'));
}

// Task 10. Function as an Object
// Создайте функцию str, которая принимает один строчный параметр и
// выводит alert('String is non empty'), если параметр - непустая строка и
// alert('String is empty'), если параметр – пустая строка.
// Создайте функцию isNonEmptyStr, как свойство функции str. Эта функция должна
// принимать один параметр и возвращать true, если параметр непустая строка,
// иначе false. Используйте эту функцию для реализации условия в основной функции.
// Тестовые данные:
// str.isNonEmptyStr(), result = false
// str.isNonEmptyStr(''), result = false
// str.isNonEmptyStr('a'), result = true
// str.isNonEmptyStr(1), result = false
// str(), alert('String is empty')
// str('a'), alert('String is non empty')

console.log("Task 10");
{
    function str(line) {
        console.log(str.isNonEmptyStr(line) > 0 ? "String is non empty" : "String is empty");
    };
    str.isNonEmptyStr = function (line) {
        if (typeof line != 'string') {
            return false;
        }
        return line.trim().length > 0 ? true : false;
    };
    console.log(str.isNonEmptyStr());
    console.log(str.isNonEmptyStr(''));
    console.log(str.isNonEmptyStr('a'));
    console.log(str.isNonEmptyStr(1));
    str();
    str('a');

}


// Task 11. Function as a Parameter
// Создайте функцию toConsole с одним параметром, которая выводит значение
// параметра в консоль.
// Создайте функцию toAlert с одним параметром, которая выводит значение
// параметра используя alert().
// Создайте функцию splitToWords с двумя параметрами: msg и callback.
// Функция должна разделять строку на слова и использовать колбек для отображения
// слов. Если второй параметр не задан, функция должна возвращать массив слов.
// Тестовые данные:
// splitToWords("My very long text msg", toConsole);
// result
// My
// very
// long
// text
// msg
// splitToWords("My very long text msg", toAlert);
// result = alert(My), ….
// console.log( splitToWords("My very long text msg") );
// result = ['My', 'very', 'long', 'text', 'msg']

console.log("Task 11");
{
    let toConsole = function (msg) {
        console.log(msg);
    }
    let toAlert = function (msg) {
        alert(msg);
    }
    function splitToWords(msg, callback) {
        let words = msg.split(" ");
        if (typeof callback == 'undefined') {
            return words;
        }
        words.forEach(word => callback(word));
    }
    splitToWords("My very long text msg", toConsole);
    console.log(splitToWords("My very long text msg").toString());
}

// Task 12. Function as a Result
// Создайте функцию copyright, которая должна возвращать другую функцию с
// одним параметром. Возращаемая функция должна прибавлять знак © ('\u00A9')
// вначале своего параметра. Объявите этот знак в функции copyright.
// Тестовые данные:
// console.log( copyright()('EPAM') ); result = © EPAM.

console.log("Task 12");
{
    function copyright() {
        let copySym = '\u00A9';
        return function (text) {
            return copySym + text;
        }
    }
    console.log(copyright()('EPAM'));
}

// Task 13. Function as a Result
// Задание аналогично предыдущему, но в этот раз функция copyright получает знак
// как свой параметр.

console.log("Task 13");
{
    function copyright(copySym) {
        return function (text) {
            return copySym + text;
        }
    }
    console.log(copyright('\u00A9')('EPAM'));
}

// Task 14. Function as a Method
// Создайте литерал объекта employee со следующими свойствами:
// name: 'Ann', work – функция, которая выводит в консоль сообщение
// "I am Ann. I am working..."
// Тестовые данные
// employee.work()  результат в консоле "I am Ann. I am working..."

console.log("Task 14");
{
    let employee = {
        name: 'Ann',
        work: function () {
            console.log(`I am ${this.name}. I am working...`);
        }
    };
    employee.work();
}

// Task 15. Borrow Method
// Создайте литерал объекта person со свойством name. Вызовите метод work
// объекта employee из предыдущего задания.

console.log("Task 15");
{
    let employee = {
        name: 'Ann',
        work: function () {
            console.log(`I am ${this.name}. I am working...`);
        }
    };
    let person = {
        name: "Sergey"
    }
    employee.work.call(person);
}

// Task 16. Memoization
// Создать функцию fiboMemo для вычисления чисел Фибоначчи по
// формуле F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. Функция должна хранить те значения,
// которые она уже вычисляла. Используя методы console.time(), console.timeEnd()
// определите время вычисления функции fibo и функции fiboMemo.

console.log("Task 16");
{
    let fibiWithMemo = (function () {
        function fiboMemo(k) {
            let answerFromMemo = fiboMemo.getFromMemories(k);
            if (typeof answerFromMemo != 'undefined') {
                return answerFromMemo;
            }
            let newAnswer = (k == 0) ? 0 : ((k == 1) ? 1 : (fiboMemo(k - 1) + fiboMemo(k - 2)));
            fiboMemo.putInMemories(k, newAnswer);
            return newAnswer;
        };
        fiboMemo.memories = new Map();
        fiboMemo.putInMemories = function (key, value) {
            fiboMemo.memories.set(key, value);
        };
        fiboMemo.getFromMemories = function (key) {
            fiboMemo.memories.get(key);
        };
        return fiboMemo;
    })();

    console.log('FIBO with memo:');
    console.timeEnd();
    console.time();
    console.log(fibiWithMemo(0));
    console.log(fibiWithMemo(1));
    console.log(fibiWithMemo(2));
    console.log(fibiWithMemo(3));
    console.log(fibiWithMemo(4));
    console.log(fibiWithMemo(5));
    console.log(fibiWithMemo(6));
    console.log(fibiWithMemo(7));
    console.timeEnd();
}


















