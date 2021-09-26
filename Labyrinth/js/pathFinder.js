function pathFinder() {
    let copyField = findPath();
    console.log(copyField);
    let movementChain = [];
    let dx = ROWS - 1;
    let dy = COLUMNS - 1;
    let number = copyField[dy][dx];
    while (dx !== 0 || dy !== 0) {
        number--;
        if (dy > 0 && copyField[dy - 1][dx] === number) {
            movementChain.push([dx, dy]);
            dy -= 1;
        }
        if (dy < ROWS - 1 && copyField[dy + 1][dx] === number) {
            movementChain.push([dx, dy]);
            dy += 1
        }
        if (dx > 0 && copyField[dy][dx - 1] === number) {
            movementChain.push([dx, dy]);
            dx -= 1;
        }
        if (dx < COLUMNS && copyField[dy][dx + 1] === number) {
            movementChain.push([dx, dy]);
            dx += 1;
        }
        console.log(dx, dy);
    }
    movementChain.push([0, 0]);
    console.log(movementChain);
    for (let i = 0; i < movementChain.length; i++) {
        [x, y] = movementChain[i]
        drawRedPoint(x, y)
    }
    console.log("finished2");
    console.log(copyField);
}

function findPath() {
    let copyField = field.map(function(arr) {
    return arr.slice();
});
    copyField[0][0] = 0;
    while (copyField[ROWS - 1][COLUMNS - 1] === true) {
        //efficiently?
        for (let y = 0; y < ROWS; y++) {
            for (let x = 0; x < COLUMNS; x++) {
                if (typeof (copyField[y][x]) !== "boolean") {
                    let number = copyField[y][x] + 1;
                    if (y > 0 && copyField[y - 1][x] !== false) {
                        if (copyField[y - 1][x] === true) {
                            copyField[y - 1][x] = number;
                        } else {
                            copyField[y - 1][x] = Math.min(number, copyField[y - 1][x]);
                        }
                        // drawRedPoint(x, y - 1);
                    }
                    if (y < ROWS - 1 && copyField[y + 1][x] !== false) {
                        if (copyField[y + 1][x] === true) {
                            copyField[y + 1][x] = number;
                        } else {
                            copyField[y + 1][x] = Math.min(number, copyField[y + 1][x]);
                        }
                        // drawRedPoint(x, y + 1);
                    }
                    if (x > 0 && copyField[y][x - 1] !== false) {
                        if (copyField[y][x - 1] === true) {
                            copyField[y][x - 1] = number;
                        } else {
                            copyField[y][x - 1] = Math.min(number, copyField[y][x - 1]);
                        }
                        //drawRedPoint(x - 1, y);
                    }
                    if (x < COLUMNS - 1 && copyField[y][x + 1] !== false) {
                        if (copyField[y][x + 1] === true) {
                            copyField[y][x + 1] = number;
                        } else {
                            copyField[y][x + 1] = Math.min(number, copyField[y][x + 1]);
                        }
                        // drawRedPoint(x + 1, y);
                    }
                }
            }
        }
    }
    return copyField;
}

function drawRedPoint(x, y) {
    context.beginPath();
    context.rect(PADDING + x * CELL_SIZE, PADDING + y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    context.fillStyle = PATH_CELL;
    context.fill();
}
