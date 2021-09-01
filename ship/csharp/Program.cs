using System;

namespace csharp
{
    internal enum Direction
    {
        North,
        East,
        South,
        West,
    }

    internal enum Command
    {
        Back = -2,
        Left,
        Right = 1,
    }

    internal static class Program
    {
        private static void Main()
        {
            var oldDirection =
                Input<Direction>("Введите текущее направление корабля: ");
            var command = Input<Command>("Введите команду: ");
            var newDirection = ChangeDirection(oldDirection, command);
            Console.WriteLine($"Новое направление: {newDirection}");
        }

        private static T Input<T>(string message) where T : struct
        {
            Console.Write(message);
            var success = false;
            while (!success)
            {
                success = Enum.TryParse(Console.ReadLine(), true, out T value);
                if (success) return value;
            }

            throw new InvalidOperationException("Unreachable");
        }

        private static Direction ChangeDirection(Direction oldDirection, Command command)
        {
            return (Direction) (((int) oldDirection + (int) command + 4) % 4);
        }
    }
}