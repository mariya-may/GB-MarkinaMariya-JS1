// Задание 1

var a = 1, b = 1, c, d;
c = ++a; console.log(c);           // 2 
// Если плюсы в начале, то к значению а прибавляется единица и это всё присваивается к значению с (префиксный инкремент).

d = b++; console.log(d);           // 1 
// Если плюсы в конце, то значение d приравнивается к b, а далее к значению b прибавляется единица (постфиксный инкремент).

c = (2 + ++a); console.log(c);     // 5 
// Текущее значение переменной а в данном выражении равно 2. Получается, что к а прибавляется единица, а потом двойка.

d = (2 + b++); console.log(d);     // 4 
// Текущее значение переменной b в данном выражении равно 2. Получается, что к b прибавляется двойка. После этого к d присваивается результат и лишь потом срабатывает инкремент b.

console.log(a);                    // 3 
// После всех проделанных действий переменная а была инкрементирована 2 раза. Соответственно, к изначальной единице прибавилось 2.
console.log(b);                    // 3 
// После всех проделанных действий переменная b была инкрементирована 2 раза.  Соответственно, к изначальной единице прибавилось 2.


// Задание 2

var a = 2;
var x = 1 + (a *= 2); // x = 5.
console.log("x = ", x);

// Задание 3

var a = -10, b = -5;

if (a >= 0 && b >= 0) {  // если a и b положительные, вывести их разность;
    console.log("Разность чисел a и b = ", a - b)
}
if (a < 0 && b < 0) {   // если а и b отрицательные, вывести их произведение;
    console.log("Произведение чисел a и b = ", a * b)
}
if (a >= 0 && b < 0 || b >= 0 && a < 0) { // если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
    console.log("Сумма чисел a и b = ", a + b)
}

// Задание 4

var a = 7;

switch (a) {
    case 0:
        console.log(a++);
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a++);
        break;
    default:
        console.log('Число не соответствует промежутку от 0 до 15 ', a);
}

// Задание 4 дополнительно

function rec(c) {
    console.log(c);
    if(c == 15) {
        return;
    }
    return rec(c + 1);
}

rec(7);

// Задание 5

function summxy(x, y) {
    return x + y
}
console.log(summxy(1, 6)); // сумма


function subtractionxy(x, y) {
    return x - y
}
console.log(subtractionxy(70, 6)); // разность


function multiplicationxy(x, y) {
    return x * y
}
console.log(multiplicationxy(10, 6)); // произведение


function segmentationxy(x, y) {
    return x / y
}
console.log(segmentationxy(48, 6)); // деление


// Задание 6

function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case 'сумма':
            return summxy(arg1, arg2);
            break;
        case 'разность':
            return subtractionxy(arg1, arg2);
            break;
        case 'произведение':
            return multiplicationxy(arg1, arg2);
            break;
        case 'деление':
            return segmentationxy(arg1, arg2);
            break;
        default:
            return ('Данное действие не подходит для этой функции');
    }
}
console.log(mathOperation(1, 2, 'сумма'));
console.log(mathOperation(10, 2, 'разность'));
console.log(mathOperation(6, 2, 'произведение'));
console.log(mathOperation(48, 2, 'деление'));
console.log(mathOperation(1, 2, 'gyugyugu'));

// Задание 7

console.log(null == 0); // false
console.log(null > 0); //  false
console.log(null >= 0); // true

// Выражение под номером три истинно, т. к. сравнение рассматривает null как число, приравненное к 0. Дело в том, что сравнения и нестрогие равенства по-разному работают.

// ПРАВИЛО: null равен (==) null и underfined, больше ничему другому
// При преобразовании к числу null -> 0, undefined -> NaN : 
// null > 0 - false, null >= 0 - true, НО: null == 0 - false, по правилу


// Задание 8

function power(val,pow){
    if(isNaN(val) || isNaN(pow)){
        return 'Некорректное значение';
    }

        if (pow <= 0) {
            return 1;
        } else if (pow == 1) {
            return val;
        }

    return val * power(val, pow - 1);
}
    

var val = +prompt('Введите  число');
var pow = +prompt("Введите степень числа");
console.log(power(val,pow));