using System.Collections;
using System.Collections.Generic;

namespace Maze
{
    class FieldEnumerator : IEnumerator<CellWithCoords>
    {
        private readonly Field field;
        private int row = 0;
        private int col = -1;

        public FieldEnumerator(Field field)
        {
            this.field = field;
        }

        public CellWithCoords Current
        {
            get
            {
                var coords = new Coords(row, col);
                return new(field[coords], coords);
            }
        }

        object IEnumerator.Current => Current;

        public bool MoveNext()
        {
            col++;
            if (col >= field.Columns)
            {
                row++;
                col = 0;
            }

            return row < field.Rows;
        }

        public void Reset()
        {
            row = 0;
            col = -1;
        }

        public void Dispose()
        {
        }
    }
}
