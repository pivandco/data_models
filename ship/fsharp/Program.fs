open System

type Direction =
    | North = 0
    | East = 1
    | South = 2
    | West = 3

type Command =
    | Back = -2
    | Left = -1
    | Right = 1

let rec input (message: string) =
    Console.Write message

    match Enum.TryParse(Console.ReadLine(), true) with
    | false, _ -> input message
    | true, value -> value

let changeDirection (command: Command) (oldDirection: Direction) : Direction =
    LanguagePrimitives.EnumOfValue(
        ((LanguagePrimitives.EnumToValue oldDirection)
         + (LanguagePrimitives.EnumToValue command)
         + 4) % 4
    )

[<EntryPoint>]
let main _ =
    let oldDirection: Direction = input "Введите текущее направление корабля: "
    let command: Command = input "Введите команду: "
    let newDirection = changeDirection command oldDirection
    Console.WriteLine $"Новое направление: {newDirection}"
    0
