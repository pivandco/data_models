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
    Commands[Commands["Right"] = 1] = "Right";
    Commands[Commands["Back"] = 2] = "Back";
    Commands[Commands["Left"] = 3] = "Left";
})(Commands || (Commands = {}));


function set_start_direction() {
    var direction = document.getElementById("email").value.toLowerCase();
    var span_status = document.getElementById("status");
    if (Direction[direction]!==undefined) {
    document.getElementById("start_form").style.display = 'none';
    document.getElementById("compas_form").style.display = 'contents';
    document.getElementById("direction_outpat").innerHTML= direction;
}
      else span_status.innerHTML = "Направление не корректно";
}
function change_direction(command){
  var old_direction=document.getElementById("direction_outpat").innerHTML.toLowerCase();
  var new_direction=Direction[(Direction[old_direction]+Commands[command])%4];
document.getElementById("direction_outpat").innerHTML= new_direction;
}