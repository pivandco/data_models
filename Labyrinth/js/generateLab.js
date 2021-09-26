"use strict"
// optimization 1.Check algorithm 2.Rewrite drawing
const CELL_SIZE = 8;
const PADDING = 5;
const FREE_CELL = "white";
const WALL_CELL = "black";
const PATH_CELL = "red";
const DELAY_TIMEOUT = 0;

const ANIMATION_ON=false;

const COLUMNS =101;
const ROWS = 101;

const canvas = document.getElementById("lab");
const context = canvas.getContext("2d");

let field;

function main() {
    field = createField();
    setCanvas();
    drawLabyrinth();
    createLabyrinth();
    console.log("finished");
}

async function createLabyrinth() {
    field[0][0] = true;
    let possiblePoints;
    while (possiblePoints = findStartPoints()) {
        createPath(possiblePoints);
        if (ANIMATION_ON) {
            drawLabyrinth();
            await delay(DELAY_TIMEOUT);
        }
    }
    drawLabyrinth();
}

function createPath(possiblePoints) {
    let currentPosition = getRandomItem(possiblePoints);
    let movementChain = [];
    while (true) {
        movementChain.push(currentPosition);
        currentPosition = newPosition(currentPosition);
        let [curX, curY] = currentPosition;
        if (field[curY][curX]) {
            movementChain.push(currentPosition);
            break;
        }
        for (let i = 0; i < movementChain.length; i++) {
            let [prevX, prevY] = movementChain[i];
            if (curX === prevX && curY === prevY) {
                movementChain.length = i;
            }
        }
    }
    drawPath(movementChain);
}

function drawPath(movementChain) {
    let [dx, dy] = movementChain[0];
    field[dy][dx] = true;
    for (let i = 1; i < movementChain.length; i++) {
        let [dx1, dy1] = movementChain[i];
        field[dy1][dx1] = true;
        drawPoint(dx1,dy1);
        let [dx2, dy2] = movementChain[i - 1];
        field[(dy2 + dy1) / 2][(dx2 + dx1) / 2] = true;
        drawPoint(dx2,dy2)
    }
}

function delay(timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout));

}

function newPosition(currentPosition) {
    let [dx1, dy1] = currentPosition;
    let [dx2, dy2] = getDirection(dx1, dy1);
    return [dx1 + dx2, dy1 + dy2];
}

function getDirection(x, y) {
    let directions = [];
    if (x > 0) {
        directions.push([-2, 0])
    }
    if (x < COLUMNS - 1) {
        directions.push([2, 0])
    }
    if (y > 0) {
        directions.push([0, -2])
    }
    if (y < ROWS - 1) {
        directions.push([0, 2])
    }
    return getRandomItem(directions);
}

function createField() {
    const field = [];
    for (let y = 0; y < ROWS; y++) {
        const row = [];
        for (let x = 0; x < COLUMNS; x++) {
            row[x] = false;
        }
        field.push(row);
    }
    return field;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomItem(array) {
    return array[getRandomInt(array.length)];
}

function setCanvas() {
    canvas.width = COLUMNS * CELL_SIZE + PADDING * 2;
    canvas.height = ROWS * CELL_SIZE + PADDING * 2;
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "gray";
    context.fill();
}

function drawLabyrinth() {
    for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLUMNS; x++) {
            drawPoint(x,y);
        }
    }
}
function drawPoint(x,y){
    context.beginPath();
    context.rect(PADDING + x * CELL_SIZE, PADDING + y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    context.fillStyle = field[y][x] ? FREE_CELL : WALL_CELL;
    context.fill();
}
function findStartPoints() {
    let possiblePoints = [];
    for (let y = 0; y < ROWS; y += 2) {
        for (let x = 0; x < COLUMNS; x += 2) {
            if (!field[y][x]) {
                possiblePoints.push([x, y]);
            }
        }
    }
    if (possiblePoints.length) return possiblePoints;
    else return null;
}