console.log('Arrays');

// Task 01
// Создать массив. Получить последний элемент массива.
// 1.    Без удаления этого элемента из массива.
// 2.    С удалением этого элемента из массива

console.log("Task 1");
{
    let ar = [1, 2, 3, 4, 5];
    console.log(ar[ar.length - 1]);
    console.log(ar.pop());
    console.log(ar.toString());
}

// Task 02
// Создать массив. Добавить элемент в конец массива.
// 1    Получить тот же массив
// 2    Получить новый массив

console.log("Task 02");
{
    let ar = [1, 2, 3, 4, 5];
    ar.push(6);
    console.log(ar.toString());
    console.log(ar.concat(7).toString());
    console.log(ar.toString());
}

// Task 03
// Создать массив. Обойти элементы массива и вывести их в консоль.

console.log("Task 03");
{
    let ar = [1, 2, 3, 4, 5];
    ar.forEach(function (element) {
        console.log(element);
    });
}

// Task 04
// Создать массив чисел в диапазоне от 0 до 100.
// Вывети сумму тех элементов, которые удовлетворяют условию arr[i] > 50.

console.log("Task 04");
{
    let ar = [41, 32, 93, 24, 75];
    let sum = 0;
    ar.filter(element => element > 50).forEach(element => sum += element);
    console.log(sum);
}

// Task 05
// Создать массив строк. На основе этого массива создать строку –
// объдинить все элементы массива используя определенный разделитель.

console.log("Task 05");
{
    let ar = ['Hello', 'my', 'teacher'];
    console.log(ar.join(' '));
}

// Task 06
// Создать массив чисел от 1 до 20 в случайном порядке.
// Отcортировать массив по возрастанию. Получить массив отсортрованный
// в обратном порядке и вывести его в консоль.

console.log("Task 06");
{
    let ar = Array.from(Array(21).keys());
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
    }
    shuffle(ar);
    console.log(ar.toString());
    ar.sort((el1, el2) => el1 - el2);
    console.log(ar.toString());
    ar.reverse();
    console.log(ar.toString());
}

// Task 07
// Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
// На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2] –
// сначала отрицательные числа, затем нули, затем положительные числа.
// Порядок оставить без изменения.

console.log("Task 07");
{
    let ar = [3, 0, -1, 12, -2, -4, 0, 7, 2];
    ar.sort((el1, el2) => {
        if ((el1 == 0 && el2 == 0) || (el1 > 0 && el2 > 0) || (el1 < 0 && el2 < 0)) {
            return 0;
        } else {
            return el1 - el2;
        }
    });
    console.log(ar.toString());
}

// Task 08
// 1. Создайте массив styles с элементами «Джаз», «Блюз».
// 2. Добавьте в конец значение «Рок-н-Ролл»
// 3. Замените предпоследнее значение с конца на «Классика».
//    Код замены предпоследнего значения должен работать для массивов любой длины.
// 4. Удалите первое значение массива и выведите его alert.
// 5. Добавьте в начало значения «Рэп» и «Регги».

console.log("Task 08");
{
    let styles = ['Джаз', 'Блюз'];
    styles.push('Рок-н-Ролл');
    styles[styles.length - 2] = 'Классика';
    console.log(styles.shift());
    console.log(styles.toString());
}

// Task 09
// Подсчитать в указанной строке отдельно количество букв r, k, t.
// dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh

console.log("Task 09");
{
    let str = 'dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh';
    let rCount = 0;
    let kCount = 0;
    let tCount = 0;
    let sum = 0;
    for (let letter of str) {
        switch (letter) {
            case 'r':
                rCount++;
                break;
            case 'k':
                kCount++;
                break;
            case 't':
                tCount++;
                break;
        }
    }
    console.log(`r = ${rCount}`);
    console.log(`k = ${kCount}`);
    console.log(`t = ${tCount}`);
    console.log(`sum = ${rCount + tCount + kCount}`);
}

// Task 10
// Создать массив. Получить случайный элемент из массива.

console.log("Task 10");
{
    const ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(ar[Math.floor(Math.random() * ar.length)]);
}

// Task 11
// Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr
// и возвращает новый массив, который содержит только числа из arr
// из диапазона от a до b.Функция не должна менять arr.

console.log("Task 11");
{
    function filterRange(arr, a, b) {
        return arr.slice(a - 1, b);
    }
    let ar = [1, 2, 3, 4, 5, 6, 7];
    console.log(filterRange(ar, 2, 4).toString());
    console.log(ar.toString());
}

// Task 12
// Создать двумерный массив:
// 1 2 3
// 4 5 6
// 7 8 9
// Вывести его в консоль.

console.log("Task 12");
{
    let ar2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    ar2.forEach(elem => console.log(elem.toString()));
}

// Task 13
// Преобразовать двумерный массив в одномерный.

console.log("Task 13");
{
    let ar2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let ar1 = [];
    ar2.forEach(elem => ar1.push(...elem));
    console.log(ar1.toString());
}

// Task 14
// Создать FIFO (first-in, first-out) очередь.
// Выберите один из вариантов реализации:
// - отдельные функции get/ set,
// - функция - конструктор,
// - класс.

console.log("Task 14");
{
    class FIFO {
        constructor() {
            this.ar = [];
            this.putItem = function (elem) {
                this.ar.push(elem);
            };
            this.getItem = function () {
                return this.ar.shift();
            }
        }
    }

    let fifo = new FIFO();
    fifo.putItem(1);
    fifo.putItem(2);
    fifo.putItem(3);
    fifo.putItem(4);
    console.log(fifo.getItem());
    console.log(fifo.getItem());
    console.log(fifo.getItem());
    console.log(fifo.getItem());
}

// Task 15
// Создать массив. На основе получить другой массив – подмножество элементов
// оригинального массива начиная с индекса a и заканчивая индексом b.

console.log("Task 15");
{
    let ar1 = [1, 2, 3, 4, 5];
    let ar2 = ar1.slice(2, 7);
    console.log(ar1.toString());
    console.log(ar2.toString());
}

// Task 16
// Создать массив. Найти индекс указаного элемента в массиве.

console.log("Task 16");
{
    let ar1 = [1, 2, 3, 4, 5];
    console.log(ar1.indexOf(3));
}

// Task 17
// Создать массив с дублями элементов. На его основе создать массив
// уникальных элементов (удалить дубли).

console.log("Task 17");
{
    let ar1 = [1, 1, 2, 3, 3, 4, 4, 5];
    let ar2 = [];
    ar1.forEach(elem => {
        if (ar2.indexOf(elem) < 0) {
            ar2.push(elem);
        }
    });
    console.log(ar2.toString());
}

// Task 18
// Создать массив с дублями. Найти первый элемент, который дублируется.
// Заменить этот элемент и все его копии на указанный символ.

console.log("Task 18");
{
    let ar1 = [1, 1, 2, 3, 3, 4, 4, 5];
    let uniqSet = new Set();
    let repitSym;
    for (let elem of ar1) {
        if ((uniqSet.has(elem))) {
            repitSym = elem;
            break;
        } else {
            uniqSet.add(elem);
        }
    };
    console.log(ar1.map(elem => {
        if (elem == repitSym) {
            return 'r';
        }
        return elem;
    }).toString());

}

// Task 19
// Создать массив целых чисел. На его основе создать массивы – представления
// этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде.

console.log("Task 19");
{
    let ar = [1, 25, 32, 47, 5];
    console.log(ar.map(elem => elem.toString(16)).toString());
    console.log(ar.map(elem => elem.toString(8)).toString());
    console.log(ar.map(elem => elem.toString(2)).toString());    
}

// Task 20
// Получить из строки «a big brown fox jumps over the lazy dog» массив слов,
// который содержит элементы, длина которых не больше 3 символа.

console.log("Task 20");
{
    let str = 'a big brown fox jumps over the lazy dog';
    let ar = str.split(' ').filter(elem => elem.length<=3);
    console.log(ar.toString());
}

// Task 21
// Создать массив, который содержит строки и числа. Проверить, содержит ли массив
// только строки.

console.log("Task 21");
{
    let ar = ['let', 1, 'it', 5, 'be'];
    console.log(ar.every(elem => (typeof elem) == 'string'));
}


















