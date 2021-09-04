"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["north"] = 0] = "north";
    Direction[Direction["east"] = 1] = "east";
    Direction[Direction["south"] = 2] = "south";
    Direction[Direction["west"] = 3] = "west";
})(Direction || (Direction = {}));

var Commands;
(function (Commands) {
    Commands[Commands["right"] = 1] = "right";
    Commands[Commands["back"] = 2] = "back";
    Commands[Commands["left"] = 3] = "left";
})(Commands || (Commands = {}));

   function input_Enum_Value(message, Enum_Name){
       let value
       while (value===undefined){
           value=Enum_Name[prompt(message).toLowerCase()]
       }
       return value;
   }

   function change_Direction(curent_direction, command){
       return (Direction[(curent_direction + command) % 4]);
  }

   let curent_direction = input_Enum_Value("Введите изначальное направление:", Direction);
   let repeat;
do {
    let command= input_Enum_Value("Введите команду(right,back,left)", Commands);
    curent_direction = change_Direction(curent_direction, command);
    alert('Направление на: ' + curent_direction);
    repeat = confirm("Изменить направление?");
    curent_direction=Direction[curent_direction];
} while (repeat);