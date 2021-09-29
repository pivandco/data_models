using System.Linq;

namespace Maze
{
    record Coords(int Row, int Col)
    {
        public bool ValidIn(Field field) => Enumerable.Range(0, field.Rows).Contains(Row) && Enumerable.Range(0, field.Columns).Contains(Col);
    }
}
