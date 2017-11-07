console.log('Primitive Data Types');

// Task 01
// Объявите переменную days и проинициализируйте ее числом от 1 до 10.
// Преобразуйте это число в количество секунд и выведите в консоль.

console.log("Task 01");
{
    let days = 5;
    console.log(days * 24 * 60 * 60);
}

// Task 02
// Объявите две переменные: admin и name. Установите значение переменной name
// в ваше имя. Скопируйте это значение в переменную admin и выведите его в консоль.

console.log("Task 02");
{
    let admin, name;
    name = 'Sergey';
    admin = name;
    console.log(admin);
}

// Task 03
// Объявите три переменных: a, b, c. Присвойте им следующие значения: 10, 2, 5.
// Объявите переменную result1 и вычислите сумму значений переменных a, b, c.
// Объявите переменную min и вычислите минимальное значение переменных a, b, c.
// Выведите результат в консоль.

console.log("Task 03");
{
    let a = 10;
    let b = 2;
    let c = 5;
    let result1 = a + b + c;
    let min = Math.min(a, b, c);
    console.log(`sum = ${result1}; min = ${min}`);
}

// Task 04
// Объявите три переменных: hour, minute, second. Присвойте им следующие значения:
// 10, 40, 25. Выведите в консоль время в формате 10:40:25.

console.log("Task 04");
{
    let hour = 10;
    let minute = 40;
    let second = 25;
    console.log(`${hour}:${minute}:${second}`);
}

// Task 05
// Объявите переменную minute и проинициализируйте ее целым числом.
// Вычислите к какой четверти принадлежит это число и выведите в консоль.

console.log("Task 05");
{
    let minute = 35;
    if (minute < 0) {
        console.log('Минуты не могут быть отрицательные');
    } else {
        if (minute <= 15) {
            console.log('Первая четверть');
        } else {
            if (minute <= 30) {
                console.log('Вторая четверть');
            } else {
                if (minute <= 45) {
                    console.log('Третья четверть');
                } else {
                    console.log('Последняя четверть');
                }
            }
        }
    }
}

// Task 06
// Объявите две переменные, которые содержат стоимость товаров:
// первый товар - 0.10 USD, второй - 0.20 USD
// Вычислите сумму и выведите в консоль. Используйте toFixed()

console.log("Task 06");
{
    let firstCost = 0.1;
    let secondCost = 0.2;
    console.log(`${(firstCost + secondCost).toFixed(2)} USD`)
}

// Task 07
// Объявите переменную a.
// Если значение переменной равно 0, выведите в консоль "True", иначе "False".
// Проверьте, что будет появляться в консоли для значений 1, 0, -3.

console.log("Task 07");
{
    isZero(1);
    isZero(0);
    isZero(-3);
    function isZero(a) {
        if (a == 0) {
            console.log('True');
        } else {
            console.log('False');
        }
    }
}

// Task 08
// Объявите две переменных: a, b. Вычислите их сумму и присвойте переменной result.
// Если результат больше 5, выведите его в консоль, иначе умножте его на 10
// и выведите в консоль.
// Данные для тестирования: 2, 5 и 3, 1.

console.log("Task 08");
{
    function magic(a, b) {
        let result = a + b;
        if (result <= 5) {
            result *= 10;
        }
        console.log(result);
    }
    magic(2, 5);
    magic(3, 1);
}

// Task 09
// Объявите переменную month и проинициализируйте ее числом от 1 до 12.
// Вычислите время года и выведите его в консоль.

console.log("Task 09");
{
    let month = 12;
    if (month < 0) {
        console.log("Месяцы не могут быть отрицательными");
    } else {
        if (month <= 2 || month == 12) {
            console.log('Зима');
        } else {
            if (month <= 5) {
                console.log('Весна');
            } else {
                if (month <= 8) {
                    console.log('Лето');
                } else {
                    console.log('Осень');
                }
            }
        }
    }
}

// Task 10
// Выведите в консоль все числа от 1 до 10.

console.log("Task 10");
{
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Task 11
// Выведите в консоль все четные числа от 1 до 15.

console.log("Task 11");
{
    Array.from(Array(16).keys()).forEach(elem => {
        if (elem != 0 && elem % 2 == 0) {
            console.log(elem);
        }
    });
}

// Task 12
// Нарисуйте в консоле пирамиду на 10 уровней как показано ниже
// x
// xx
// xxx
// xxxx
// ...

console.log("Task 12");
{
    for (let i = 1; i <= 10; i++) {
        console.log('x'.repeat(i));
    }
}

// Task 13
// Нарисуйте в консоле пирамиду на 9 уровней как показано ниже
// 1
// 22
// 333
// 4444
// ...

console.log("Task 13");
{
    for (let i = 1; i <= 9; i++) {
        console.log(`${i}`.repeat(i));
    }
}

// Task 14
// Запросите у пользователя какое либо значение и выведите его в консоль.

console.log("Task 14");
{
    let i;
    //i = prompt();
    i = 3;
    console.log(i);
}

// Task 15
// Перепишите if используя тернарный опертор
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

console.log("Task 15");
{
    let a = 5, b = 4;
    console.log((a + b < 4) ? 'Мало' : 'Много');
}

// Task 16
// Перепишите if..else используя несколько тернарных операторов.
// var message;
// if (login == 'Вася') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

console.log("Task 16");
{
    let login = 'Директор';
    var message;
    message = (login == 'Вася') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';
    console.log(message);
}

// Task 17
// Замените for на while без изменения поведения цикла
// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }

console.log("Task 17");
{
    let i = 0;
    while (i < 3) {
        //alert(`Номер ${i}!`);
        console.log(`Номер ${i}!`);
        i++;
    }
}

// Task 18
// Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если пользователь ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число,
// большее 100, либо не нажмёт кнопку Cancel (ESC).
// Предусматривать обработку нечисловых строк в этой задаче необязательно.

console.log("Task 18");
{
    // let answer;
    // do{
    //     answer = prompt("Введите значение больше 100");
    // }while(answer !== null && answer <= 100);
}

// Task 19
// Переписать следующий код используя switch
// var a = +prompt('a?', '');
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

console.log("Task 19");
{
    // var a = +prompt('a?', '');
    // switch (a) {
    //     case 0:
    //         alert(0);
    //         break;
    //     case 1:
    //         alert(1);
    //         break;
    //     case 2:
    //     case 3:
    //         alert("2,3");
    //         break;
    // }
}

// Task 20
// Объявите переменную и проинициализируйте ее строчным значением в переменном
// регистре. (Например так "таООооОддОО")
// Напишите код, который преобразует эту строку к виду:
// первая буква в верхнем регистре, остальные буквы в нижнем регистре.
// Выведите результат работы в консоль
// Используйте: toUpperCase/toLowerCase, slice.

console.log("Task 20");
{
    let word = "таООооОддОО";
    console.log(`${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`);
}

// Task 21
// Напишите код, который выводит в консоль true, если строка str содержит
// „viagra“ или „XXX“, а иначе false.
// Тестовые данные: 'buy ViAgRA now', 'free xxxxx'

console.log("Task 21");
{
    function checkContain(test) {
        if (test.toLowerCase().includes('viagra'.toLowerCase()) || test.toLowerCase().includes('XXX'.toLowerCase())) {
            console.log(true);
        }else{
            console.log(false);            
        }
    }
    checkContain('buy ViAgRA now');
    checkContain('free xxxxx')
}

// Task 22
// Напишите код, который проверяет длину строки str, и если она превосходит
// maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
// Результатом должна быть (при необходимости) усечённая строка.
// Выведите строку в консоль
// Тестовые данные:
//  "Вот, что мне хотелось бы сказать на эту тему:", 20
//  "Всем привет!", 20

console.log("Task 22");
{
    let maxLength = 20;
    function superCutForStr(str){
        if(str.length > maxLength){
            str = str.slice(0, str.length - 3) + '...';
        }
        console.log(str);
    }
    superCutForStr("Вот, что мне хотелось бы сказать на эту тему:");
    superCutForStr("Всем привет!");
}

// Task 23
// Напишите код, который из строки $100 получит число и выведите его в консоль.

console.log("Task 23");
{
    let str = '$100';
    console.log(str.slice(1));
}

// Task 24
// Напишите код, который проверит, является ли переменная промисом

console.log("Task 24");
{
    let promise = new Promise((resolve, reject) => resolve);
    console.log((Promise.prototype.isPrototypeOf(promise)) ? "Да, это промис" : "Нет, это не промис");
}
