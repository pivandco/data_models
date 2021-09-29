using System;

namespace Maze
{
    public class Maze
    {
        public static void Main()
        {
            var field = Field.FromString(@"  ..#.#
                                             @.#X#
                                             ..#.#
                                             ....#  ");
            new PathFinder(field).FindPath();
            Console.WriteLine(field.ToString());
        }
    }
}