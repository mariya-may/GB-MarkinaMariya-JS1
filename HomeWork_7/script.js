var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300;
var snake = [];
var direction = 'y+';
var gameIsRunning = false;
var snakeTimer;
var foodTimer;
var score = 0;
var scoreField;

    function init() {
        prepareGameField(); 

        scoreField = document.getElementById('score-field');
        scoreField.innerHTML = score;

        let main = document.getElementsByClassName('main')[0];
        if (20 * (FIELD_SIZE_X + 1) < 380) {
            main.style.width = '380px';
        }
        else {
            main.style.width = (20 * (FIELD_SIZE_X + 1)).toString() + 'px';
        }

        document.getElementById('snake-start').addEventListener('click', startGame);
        document.getElementById('snake-restart').addEventListener('click', refreshGame);
        addEventListener('keydown', changeDirection);
    }

    function prepareGameField() {
        var gameTable = document.createElement('table');
        gameTable.className = 'game-table';


        for (var i = 0; i < FIELD_SIZE_Y; i++) {
            var row = document.createElement('tr');
            row.className = 'game-table-row row-' + i;

            for (var j = 0; j < FIELD_SIZE_X; j++) {
                var cell = document.createElement('td');
                cell.className = 'game-table-cell cell-' + i + '-' + j;
                row.appendChild(cell);
            }
            gameTable.appendChild(row);
        }

        document.getElementById('snake-field').appendChild(gameTable);
    }

    function startGame() {
        gameIsRunning = true;
        respawn();

        snakeTimer = setInterval(move, SNAKE_SPEED);
        setTimeout(createFood, 3000);
        setInterval(createBlockage, 5000);
    }


    function respawn() {
        var startCoordX = Math.floor(FIELD_SIZE_X / 2);
        var startCoordY = Math.floor(FIELD_SIZE_Y / 2);
        var snakeHead = document.getElementsByClassName('cell-' + startCoordY + '-' + startCoordX)[0];
        snakeHead.setAttribute('class', snakeHead.getAttribute('class') + ' snake-unit');
        var snakeTail = document.getElementsByClassName('cell-' + (startCoordY - 1) + '-' + startCoordX)[0];
        snakeTail.setAttribute('class', snakeTail.getAttribute('class') + ' snake-unit');

        snake.push(snakeHead);
        snake.push(snakeTail);
    }

    function move() {
        var snakeHeadClasses = snake[snake.length - 1].getAttribute('class').split(' ');
        var newUnit;
        var snakeCoords = snakeHeadClasses[1].split('-');

        var coordY = parseInt(snakeCoords[1]);
        var coordX = parseInt(snakeCoords[2]);


        if (direction == 'x-') {
            newUnit = document.getElementsByClassName('cell-' + (coordY) + '-' + (coordX - 1))[0];
            if (snakeCoords[2] == (FIELD_SIZE_X - FIELD_SIZE_X)) {
                newUnit = document.getElementsByClassName('cell-' + (coordY) + '-' + (coordX + (FIELD_SIZE_X - 1)))[0];
            }
        }

        else if (direction == 'x+') {
            newUnit = document.getElementsByClassName('cell-' + (coordY) + '-' + (coordX + 1))[0];
            if (snakeCoords[2] == (FIELD_SIZE_X - 1)) {
                newUnit = document.getElementsByClassName('cell-' + (coordY) + '-' + (coordX - (FIELD_SIZE_X - 1)))[0];
            }
        }
        else if (direction == 'y+') {
            newUnit = document.getElementsByClassName('cell-' + (coordY - 1) + '-' + (coordX))[0];
            if (snakeCoords[1] == (FIELD_SIZE_Y - FIELD_SIZE_Y)) {
                newUnit = document.getElementsByClassName('cell-' + (coordY + (FIELD_SIZE_Y - 1)) + '-' + (coordX))[0];
            }
        }
        else if (direction == 'y-') {
            newUnit = document.getElementsByClassName('cell-' + (coordY + 1) + '-' + (coordX))[0];
            if (snakeCoords[1] == (FIELD_SIZE_Y - 1)) {
                newUnit = document.getElementsByClassName('cell-' + (coordY - (FIELD_SIZE_Y - 1)) + '-' + (coordX))[0];
            }
        }

        if (!isSnakeUnit(newUnit) && newUnit !== undefined) {
            newUnit.setAttribute('class', newUnit.getAttribute('class') + ' snake-unit');
            snake.push(newUnit);
            if (!haveFood(newUnit)) {
                var removed = snake.splice(0, 1)[0];
                var classes = removed.getAttribute('class').split(' ');

                removed.setAttribute('class', classes[0] + ' ' + classes[1]);
            }

            if (haveBlockage(newUnit)) {
                finishTheGame();
            }
        }
        else {
            finishTheGame();
        }
    }

    function isSnakeUnit(unit) {
        var check = false;

        if (snake.includes(unit)) {
            check = true;
        }
        return check;
    }

    function haveFood(unit) {
        var check = false;

        var unitClasses = unit.getAttribute('class').split(' ');

        if (unitClasses.includes('food-unit')) {
            check = true;
            createFood();

            scoreField.innerHTML = ++score;
        }
        return check;
    }

    function createFood() {
        var foodCreated = false;

        while (!foodCreated) {
            var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
            var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);

            var foodCell = document.getElementsByClassName('cell-' + foodY + '-' + foodX)[0];
            var foodCellClasses = foodCell.getAttribute('class').split(' ');


            if (!foodCellClasses.includes('snake-unit')) {
                var classes = '';

                for (var i = 0; i < foodCellClasses.length; i++) {
                    classes += foodCellClasses[i] + ' ';
                }

                foodCell.setAttribute('class', classes + 'food-unit');
                foodCreated = true;
            }
        }
    }

    function createBlockage() {
    var blockCreated = false;

        while (!blockCreated) {
            var blockX = Math.floor(Math.random() * FIELD_SIZE_X);
            var blockY = Math.floor(Math.random() * FIELD_SIZE_Y);
            var blockCell = document.getElementsByClassName('cell-' + blockY + '-' + blockX)[0];
            var blockCellClasses = blockCell.getAttribute('class').split(' ');

            if (!blockCellClasses.includes('snake-unit')) {
                var classes = '';

                for (var i = 0; i < blockCellClasses.length; i++) {
                    classes += blockCellClasses[i] + ' ';
                }

                blockCell.setAttribute('class', classes + 'block-unit');
                blockCreated = true;
            }
        }
    }

    function haveBlockage(unit) {
        var check = false;
        var unitClasses = unit.getAttribute('class').split(' ');
        if (unitClasses.includes('block-unit')) {
            check = true;
        }
        return check;
    }

    function changeDirection(e) {
        switch (e.keyCode) {
            case 37: 
                if (direction != 'x+') {
                    direction = 'x-'
                }
                break;
            case 38: 
                if (direction != 'y-') {
                    direction = 'y+'
                }
                break;
            case 39: 
                if (direction != 'x-') {
                    direction = 'x+'
                }
                break;
            case 40: 
                if (direction != 'y+') {
                    direction = 'y-'
                }
                break;
        }
    }

    function finishTheGame() {
        gameIsRunning = false;
        clearInterval(snakeTimer);
        clearInterval(snakeTimer);
        alert('Вы проиграли! Ваш результат: ' + score.toString());
    }


    function refreshGame() {
        location.reload();
    }

    window.onload = init;