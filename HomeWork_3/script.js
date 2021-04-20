// Задание 1

var n = 0;
while (n < 100) {
    if (theNumber(n)) {
        console.log(n);
    }
    n++;
}

function theNumber(a) {
    if (a < 2) {
        return false;
    }

    for (var x = 2; x < a; x++) {
        if (a % x === 0) {
            return false;
        }
    }
    return true;
}

// Задание 3

var cart = [
    ['dress', 2400, 3],
    ['coat', 6700, 2],
];

function countBasketPrice(cart) {
    var finalСost = 0;
    for (var x = 0; x < cart.length; x++) {
        finalСost += cart[x][1] * cart[x][2]
    }
    return finalСost;
}
console.log(countBasketPrice(cart));

// Задание 4

for (var a = 0; a < 10; console.log(a++)) { };

// Задание 5

var s = 'x';
console.log(s + '\n');
for (var f = 1; f < 20; f++) {
    console.log((s += 'x') + '\n');
}    
