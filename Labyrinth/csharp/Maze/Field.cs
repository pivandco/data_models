using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Maze
{
    class Field : IEnumerable<CellWithCoords>
    {
        private readonly ICell[,] cells;

        public Field(int height, int width)
        {
            cells = new ICell[height, width];
            FillWithFreeCells();
        }

        public int Rows { get => cells.GetUpperBound(0) + 1; }

        public int Columns { get => cells.Length / Rows; }

        public ICell this[Coords coords]
        {
            get => cells[coords.Row, coords.Col];
            set => cells[coords.Row, coords.Col] = value;
        }

        public static Field FromString(string picture)
        {
            var lines = picture.Trim().Replace(" ", string.Empty).Replace("\r", string.Empty).Split('\n');
            var height = lines.Length;
            var width = lines[0].Length;
            var field = new Field(height, width);

            foreach (var (_, coords) in field)
            {
                field[coords] = ICell.FromChar(lines[coords.Row][coords.Col]);
            }

            return field;
        }

        public override string ToString()
        {
            var builder = new StringBuilder();

            foreach (var (cell, (_, col)) in this)
            {
                if (col == 0)
                {
                    builder.AppendLine();
                }

                builder.Append($"{cell} ");
            }

            return builder.ToString().Trim();
        }

        public FreeCell GetStartingCell() => (from cellWithCoords in this
                                              where (cellWithCoords.Cell as FreeCell)?.N == 1
                                              select cellWithCoords.Cell as FreeCell).First();

        public IEnumerable<ICell> GetNeighbours(ICell cell)
        {
            var (myRow, myCol) = GetCellCoords(cell);
            var possiblyValidNeighbourCoords = new[]
            {
                new Coords(myRow + 1, myCol),
                new Coords(myRow, myCol + 1),
                new Coords(myRow - 1, myCol),
                new Coords(myRow, myCol - 1),
            };
            return from coords in possiblyValidNeighbourCoords where coords.ValidIn(this) select this[coords];
        }

        public IEnumerator<CellWithCoords> GetEnumerator() => new FieldEnumerator(this);

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();

        private Coords GetCellCoords(ICell cell)
        {
            return (from cellWithCoords in this where cellWithCoords.Cell == cell select cellWithCoords.Coords).First();
        }

        private void FillWithFreeCells()
        {
            foreach (var (_, coords) in this)
            {
                this[coords] = new FreeCell();
            }
        }
    }
}
