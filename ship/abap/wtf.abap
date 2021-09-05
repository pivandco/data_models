program fucking_ship.

types:
    begin of enum direction,
        north value is initial,
        east value 1,
        south value 2,
        west value 3,
    end of enum direction,

    begin of enum command,
        none value is initial,
        turn_left value -1,
        turn_right value 1,
        turn_back value 2,
    end of enum command.
    
data:
    old_direction type direction,
    in_command type command,
    new_direction type direction.

* This fucked language has no console input support, so everything is hardcoded
old_direction = north.
in_command = turn_left.

* Beware: this wonder of German software engineering is space sensitive!
new_direction = conv direction( ( conv i( old_direction ) + conv i( in_command ) + 4 ) mod 4 ).
write new_direction.
