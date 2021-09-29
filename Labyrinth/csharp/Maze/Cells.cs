using System;

namespace Maze
{
    interface ICell
    {
        public static ICell FromChar(char c) => c switch
        {
            '.' => new FreeCell(),
            '@' => new FreeCell { N = 1 },
            'X' => new TargetCell(),
            '#' => new WallCell(),
            _ => throw new ArgumentException($"Invalid cell char: '{c}'"),
        };
    }

    sealed class WallCell : ICell
    {
        public override string ToString()
        {
            return "#";
        }
    }

    sealed class FreeCell : ICell
    {
        public int N { get; set; } = 0;

        public override string ToString()
        {
            return N.ToString();
        }
    }

    sealed class TargetCell : ICell
    {
        public override string ToString()
        {
            return "X";
        }
    }
}
