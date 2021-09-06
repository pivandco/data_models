#include <iostream>
#include <stdexcept>

using namespace std;

enum class Direction {
    NORTH,
    EAST,
    SOUTH,
    WEST,
};

enum class Command {
    BACK = -2,
    LEFT,
    RIGHT = 1,
};

char get_char_from_whitelist(const string &whitelist) {
    int in_char;
    do {
        in_char = tolower(getchar());
    } while (whitelist.find(in_char) == string::npos);
    return in_char;
}

Direction get_direction() {
    cout << "Введите текущее направление корабля (N - север, E - восток, S - юг, W - запад): ";
    switch (get_char_from_whitelist("nesw")) {
        case 'n': return Direction::NORTH;
        case 'e': return Direction::EAST;
        case 's': return Direction::SOUTH;
        case 'w': return Direction::WEST;
        default: throw invalid_argument("unknown direction char");
    }
}

Command get_command() {
    cout << "Введите команду (L - налево, R - направо, B - назад): ";
    switch (get_char_from_whitelist("lrb")) {
        case 'l': return Command::LEFT;
        case 'r': return Command::RIGHT;
        case 'b': return Command::BACK;
        default: throw invalid_argument("unknown command char");
    }
}

Direction change_direction(Direction old_direction, Command command) {
    return static_cast<Direction>((static_cast<int>(old_direction) + static_cast<int>(command) + 4) % 4);
}

string direction_to_string(Direction direction) {
    switch (direction) {
        case Direction::NORTH: return "Север";
        case Direction::EAST: return "Восток";
        case Direction::SOUTH: return "Юг";
        case Direction::WEST: return "Запад";
        default: throw invalid_argument("unknown direction");
    }
}

int main() {
    Direction old_direction = get_direction();
    Command command = get_command();
    Direction new_direction = change_direction(old_direction, command);
    cout << "Новое направление: " << direction_to_string(new_direction) << endl;
    return 0;
}

