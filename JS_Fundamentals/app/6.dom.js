console.log('DOM');

function log(msg) {
    console.log(msg);
}

// Task 01
// Найти элемент с id= "t01". Вывести в консоль.
// Найти родительский элемент и вывести в консоль.
// Найти дочерние ноды, если они есть, и вывести в консоль
// названия и тип нод.

console.log("Task 01");
{
    // let elem = document.getElementById('t01');
    // log(`Element = ${elem.toString()}`);
    // log(`Parent element = ${elem.parentElement}`);
    // if(elem.childNodes.length != 0){
    //     for(let child of elem.childNodes){
    //         log(`child: ${child.nodeName} ${child.nodeType}`);
    //     }
    // }
}

// Task 02
// Подсчитать количество <li> элементов на странице. Для поиска элементов использовать
// getElementsByTagName(). Вывести в консоль.
// Добавить еще один элемент в список и вывести снова их количество.

console.log("Task 02");
{
    // let liElements = document.getElementsByTagName('LI');
    // log(`liElements = ${liElements.length}`);
    // const newLi = document.createElement("li");
    // document.getElementsByTagName("ul")[0].appendChild(newLi);
    // log(`liElements = ${liElements.length}`);    
}

// Task 03
// Получить элементы <li> используя метод querySelectorAll() и вывети их в консоль
// Добавить новый <li> и снова вывести в консоль

console.log("Task 03");
{
    // let liElements = document.querySelectorAll('LI');
    // log(`liElements = ${liElements.length}`);
    // const newLi = document.createElement("li");
    // document.getElementsByTagName("ul")[0].appendChild(newLi);
    // log(`old query liElements = ${liElements.length}`); 
    // log(`new query liElements = ${document.querySelectorAll('LI').length}`) 
}

// Task 04
// Найти все первые параграфы в каждом диве и установить цвет фона #ffff00

console.log("Task 04");
{
    // for (let p of document.querySelectorAll('div>p')) {
    //     p.style.backgroundColor = '#ffff00';
    // }
}

// Task 05
// Подсчитать сумму строки в таблице и вывести ее в последнюю ячейку

console.log("Task 05");
{
    // let tr = document.querySelector("table tr  td:last-child").innerText =
    //     [...document.querySelectorAll("table tr td")]
    //         .map(td => +td.innerText).filter(elem => typeof elem == "number").reduce((a, b) => a + b).toFixed(1);
}

// Task 06
// Вывести значения всех атрибутов элемента с идентификатором t06

console.log("Task 06");
{
    // for(let attr of document.getElementById("t06").attributes){
    //     log(`${attr.name} : ${attr.value}`);
    // }
}

// Task 07
// Получить объект, который описывает стили, которые применены к элементу на странице
// Вывести объект в консоль. Использовать window.getComputedStyle().

console.log("Task 07");
{
    // log(window.getComputedStyle(document.getElementById("t06")));
}

// Task 08
// Установите в качестве контента элемента с идентификатором t08 следующий параграф
// <p>This is a paragraph</>

console.log("Task 08");
{
    // document.getElementById("t08").innerHTML = "<p>This is a paragraph</>";
}

// Task 09
// Создайте элемент <div class='c09' data-class='c09'> с некоторым текстовым контентом, который получить от пользователя,
// с помощью prompt, перед элементом с идентификатором t08,
// когда пользователь кликает на нем

console.log("Task 09");
{
    // let t08 = document.getElementById("t08");
    // t08.addEventListener("click", () => {
    //     let newDiv = document.createElement("div");
    //     newDiv.className = "c09";
    //     newDiv.attributes['data-class'] = 'c09';
    //     newDiv.innerText = prompt("Введите текст");
    //     t08.parentNode.insertBefore(newDiv, t08);
    // })
}

// Task 10
// Удалите у элемента с идентификатором t06 атрибут role
// Удалите кнопку с идентификатором btn, когда пользователь кликает по ней

console.log("Task 10");
{
    document.getElementById("t06").removeAttribute("role");
    let btn = document.getElementById("btn");
    btn.addEventListener("click", () =>{
        btn.remove();
    })
}
