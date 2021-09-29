using System.Collections.Generic;
using System.Linq;

namespace Maze
{
    class PathFinder
    {
        private readonly Field field;
        private readonly Queue<ICell> queue = new();
        private bool pathFound = false;

        public PathFinder(Field field)
        {
            this.field = field;
        }

        public void FindPath()
        {
            queue.Enqueue(field.GetStartingCell());

            while (queue.Count != 0 && !pathFound)
            {
                var cell = queue.Dequeue();
                var neighbours = field.GetNeighbours(cell);
                ProcessNeighbours(neighbours);
            }
        }

        private void ProcessNeighbours(IEnumerable<ICell> neighbours)
        {
            foreach (var neighbour in neighbours)
            {
                if (neighbour is TargetCell)
                {
                    pathFound = true;
                    return;
                }

                if (neighbour is FreeCell fc && fc.N == 0)
                {
                    fc.N = CalculateFill(neighbour);
                    queue.Enqueue(fc);
                }
            }
        }

        private int CalculateFill(ICell neighbour) => ((FreeCell)field.GetNeighbours(neighbour).First(c => c is FreeCell fc && fc.N > 0)).N + 1;
    }
}
