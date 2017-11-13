
function log(msg) {
    console.log(msg);
}

// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

console.log("Task 01");
{
    // let promise = new Promise(function(resolve, reject){
    //     log("Promise is created");
    // }).then(()=> log("Mistake - task 01 - promise is resolved"))
    // .catch(()=> log("Mistake - task 01 - promise is rejected"));
}

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и введите их в консоль

console.log("Task 02");
{
    // Promise.resolve('Promise Data').then(value => log(value));
}

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и введите их в консоль

console.log("Task 03");
{
    // new Promise((resolve, reject) => reject('Promise Error'))
    //     .catch(error => log(error));
}

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и введите их в консоль

console.log("Task 04");
{
    // new Promise((resolve, reject) => setTimeout(() => resolve('Promise Data 4'), 3000)).then(data => log(data));
}

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три кнопки и три обработчика события click для этих кнопок
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый сосзданный промис,
// свойства resolve и reject получают ссылки на сооветствующие функции
// resolve и reject. Следующий два обработчика запускают методы resolve и reject.

console.log("Task 05");
{
    // let handlePromise = {
    //     promise: null,
    //     resolve: () => log('has not resolve'),
    //     reject: () => log('has not reject'),
    //     onSuccess: data => log(`Promise is resolved with data: ${data}`),
    //     onError: error => log(`Promise is rejected with error: ${error}`)
    // };
    // document.getElementById('btn-resolve-promise').addEventListener("click", () => handlePromise.resolve('Success'));
    // document.getElementById('btn-reject-promise').addEventListener("click", () => handlePromise.reject('Falure'));
    // document.getElementById('btn-create-promise').addEventListener("click", () => {
    //     let promise = new Promise((resolve, reject) => {
    //         handlePromise.promise = this;
    //         handlePromise.resolve = resolve;
    //         handlePromise.reject = reject;
    //     }).then(data => handlePromise.onSuccess(data)).catch(error => handlePromise.onError(error));
    // });
}

// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then

console.log("Task 06");
{
    // let handlePromise = {
    //     promise: null,
    //     resolve: () => log('has not resolve'),
    //     reject: () => log('has not reject'),
    //     onSuccess: data => log(`Promise is resolved with data: ${data}`),
    //     onError: error => log(`Promise is rejected with error: ${error}`)
    // };
    // document.getElementById('btn-resolve-promise').addEventListener("click", () => handlePromise.resolve('Success'));
    // document.getElementById('btn-reject-promise').addEventListener("click", () => handlePromise.reject('Falure'));
    // document.getElementById('btn-create-promise').addEventListener("click", () => {
    //     let promise = new Promise((resolve, reject) => {
    //         handlePromise.promise = this;
    //         handlePromise.resolve = resolve;
    //         handlePromise.reject = reject;
    //     }).then(data => handlePromise.onSuccess(data))
    //         .then(data => handlePromise.onSuccess(data))
    //         .catch(error => handlePromise.onError(error));
    // });
}

// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.

console.log("Task 07");
{
    // let promise = new Promise((resolve, reject) =>
    //     setTimeout(() => resolve("My name is "), 1000)
    // )
    // let onSuccess = function (value) {
    //     return value + 'Sergey';
    // }
    // let print = function (value) {
    //     log(value);
    // }
    // promise.then(val => onSuccess(val)).then(val => print(val));
}

// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.

console.log("Task 08");
{
    // let promise = new Promise((resolve, reject) =>
    //     setTimeout(() => resolve("My name is "), 1000)
    // )
    // let onSuccess = function (value) {
    //     if (Math.random() > 0.5) {
    //         return value + 'Sergey';
    //     } else {
    //         throw new Error("Что-то пошло не так");
    //     }
    // }
    // let print = function (value) {
    //     log(value);
    // }
    // promise
    //     .then(val => onSuccess(val))
    //     .then(val => print(val))
    //     .catch(reason => print(reason.message));
}

// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData

console.log("Task 09");
{
    // let getPromiseData = function (promise) {
    //     promise.then(value => log(value.name));
    // };
    // const wrap = {
    //     name: 'Anna'
    // }
    // getPromiseData(Promise.resolve(wrap));
}

// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль

console.log("Task 10");
{
    // const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve({ name: 'Anna' }), 2000));
    // const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve({ age: 16 }), 3000));

    // Promise.all([promise1, promise2]).then(value => log(Object.assign({}, ...value)));
}

// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.

console.log("Task 11");
{
    // const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve({ name: 'Anna' }), 2000));
    // const promise2 = new Promise((resolve, reject) => setTimeout(() => reject("Promise Error"), 3000));

    // Promise.all([promise1, promise2])
    //     .then(value => log(Object.assign({}, ...value)))
    //     .catch(er => log(er));
}

// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку. Добавьте обработчик для кнопки.
// Используя метод race организуйте отмену промиса.

console.log("Task 12");
{
    const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve('Promise Data'), 5000));
    const promise2 = new Promise((resolve, reject) => {
        document.getElementById('btn-reject-promise')
            .addEventListener("click", () => reject('Falure'));
    });

    Promise.race([promise1, promise2])
        .then(value => log(value))
        .catch(er => log(er));
}