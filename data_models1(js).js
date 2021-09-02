"use strict";
let curent_direction = "North";
let repeat;
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var Commands = {
    Right : 1,
    Back : 2,
    Left : 3
};
let set_Commands = new Set();
for (let key in Commands){
set_Commands.add(key);
}
do {
    do {
        var command = prompt("Command?(Right,Left,Back)", "");
    } while (!(set_Commands.has(command)));
    curent_direction = Direction[(Direction[curent_direction] + Commands[command]) % 4];
    ;
    alert('Direction on ' + curent_direction);
    repeat = confirm("Repeat?");
} while (repeat);