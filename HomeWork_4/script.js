// Задание 1

function numberIntoObject(n) {
    if (isNaN(n)) {
        console.log('Введите, пожалуйста, число');
    } else if (n > 999 || n < 0) {
        console.log('Некорректный ввод.Введите число от 0 до 999');
        var object = {};
        return object;
    } else {
        var options = ['единицы', 'десятки', 'сотни'];
        var object = {};
        for (var x = 0; n != 0; x++) {
            object[options[x]] = n % 10;
            n = (n - n % 10) / 10;
        }
    }
    return object;
}

console.log(numberIntoObject(653));
console.log(numberIntoObject(43));
console.log(numberIntoObject(9));

// Задание 2

// В файле task_2.html


// Задание 3

//  Кто хочет стать миллионером?

