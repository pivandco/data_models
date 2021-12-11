using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;
using System.Runtime;
using System.Runtime.CompilerServices;

namespace SortArrays 
{
    public class Sorts
    {
        [Benchmark(Description = "Вставками")]
        public int InsertSort()
        {

            int[] arr = { 10, 15, 12, 3, 9, 99, -5, 7, 4, 12 };
            for (int i = 1; i < arr.Length; i++)
            {
                var j = i;
                while (j > 0 && arr[j - 1] > arr[j])
                {
                    (arr[j - 1], arr[j]) = (arr[j], arr[j - 1]);
                    j--;
                }
            }

            return arr[0];
        }

        [Benchmark(Description = "Выбором")]
        public int SelectionSort()
        {
            int[] arr = { 10, 15, 12, 3, 9, 99, -5, 7, 4, 12 };

            for (int i = 0; i < arr.Length - 1; i++)
            {
                var min = i;
                for (int j = i + 1; j < arr.Length; j++)
                {
                    if (arr[j] < arr[min])
                    {
                        min = j;
                    }

                }

                (arr[i], arr[min]) = (arr[min], arr[i]);
            }

            return arr[0];
        }

        [Benchmark(Description = "Обменом")]
        public int BubbleSort()
        {
            int[] arr = { 10, 15, 12, 3, 9, 99, -5, 7, 4, 12 };
            for (int i = 1; i < arr.Length; i++)
            {
                for (int j = 0; j < arr.Length - i; j++)
                {
                    if (arr[j] > arr[j + 1])
                    {
                        (arr[j], arr[j + 1]) = (arr[j + 1], arr[j]);
                    }
                }
            }

            return arr[0];
        }

        [Benchmark(Description = "Шейкера")]
        public int ShakerSort()
        {
            int[] arr = { 10, 15, 12, 3, 9, 99, -5, 7, 4, 12 };
            for (int i = 0; i < arr.Length / 2; i++)
            {
                var swapFlag = false;
                for (int j = 0; j < arr.Length - i - 1; j++)
                {
                    if (arr[j] > arr[j + 1])
                    {
                        (arr[j], arr[j + 1]) = (arr[j + 1], arr[j]);
                        swapFlag = true;
                    }
                }

                for (int j = arr.Length - 2 - i; j > i; j--)
                {
                    if (arr[j - 1] > arr[j])
                    {
                        (arr[j - 1], arr[j]) = (arr[j - 1], arr[j]);
                        swapFlag = true;
                    }
                }

                if (!swapFlag) break;
            }

            return arr[0];
        }
        [Benchmark(Description = "Шелла")]
        public int ShellSort()
        {
            int[] arr = { 10, 15, 12, 3, 9, 99, -5, 7, 4, 12 };
            var d = arr.Length / 2;
            while (d >= 1)
            {
                for (int i = d; i < arr.Length; i++)
                {
                    var j = i;
                    while (j >= d && arr[j - d] > arr[j])
                    {
                        (arr[j], arr[j - d]) = (arr[j - d], arr[j]);
                        j = j - d;
                    }
                }

                d = d / 2;
            }
            return arr[0];
        }
        [Benchmark(Description = "Пирамидальная")]
        public int HeapSort()
        {
            int[] arr = { 10, 15, 12, 3, 9, 99, -5, 7, 4, 12 };
            int n = arr.Length;

            for (int i = n / 2 - 1; i >= 0; i--)
                Heapify(arr, n, i);

            for (int i = n - 1; i > 0; i--)
            {
                (arr[0], arr[i]) = (arr[i], arr[0]);
                Heapify(arr, i, 0);
            }

            return arr[0];
        }

        [Benchmark(Description = "Быстрая")]
        [ArgumentsSource(nameof(Array))]
        public int[] QuickSort(int[] arr, int minIndex = 0, int maxIndex = 9)
        {
            if (minIndex >= maxIndex)
            {
                return arr;
            }

            var pivotIndex = Partition(arr, minIndex, maxIndex);
            QuickSort(arr, minIndex, pivotIndex - 1);
            QuickSort(arr, pivotIndex + 1, maxIndex);
            return arr;
        }

        int Partition(int[] arr, int minIndex, int maxIndex)
        {
            var pivot = minIndex - 1;
            for (int i = minIndex; i < maxIndex; i++)
            {
                if (arr[i] < arr[maxIndex])
                {
                    pivot++;
                    (arr[pivot], arr[i]) = (arr[i], arr[pivot]);
                }
            }

            pivot++;
            (arr[pivot], arr[maxIndex]) = (arr[maxIndex], arr[pivot]);
            return pivot;
        }

        void Heapify(int[] arr, int n, int i)
        {
            int largest = i;
            int l = 2 * i + 1;
            int r = 2 * i + 2;

            if (l < n && arr[l] > arr[largest])
            {
                largest = l;
            }

            if (r < n && arr[r] > arr[largest])
            {
                largest = r;
            }

            if (largest != i)
            {
                (arr[i], arr[largest]) = (arr[largest], arr[i]);

                Heapify(arr, n, largest);
            }
        }

        public IEnumerable<object[]> Array()
        {
            yield return new object[] { new int[] { 10, 15, 12, 3, 9, 99, -5, 7, 4, 12 }, 0, 9 };
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            var summary = BenchmarkRunner.Run<Sorts>();
        }
    }
}