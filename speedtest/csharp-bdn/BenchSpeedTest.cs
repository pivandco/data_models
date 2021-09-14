using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;

namespace SPEEDTEST 
{
    public class SearchElement
    {
        [Benchmark]
        public int LinearSearch()
        {
            int[] a = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            int x = 5, i = 0;

            while (i < a.Length - 1 && a[i] != x)
            {
                i++;
            }

            return a[i] == x ? i : -1;
        }
        [Benchmark]
        public int BarrierSearch()
        {
            int x = 5, i = 0;
            int[] a = new int[11] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, x };

            while (a[i] != x)
            {
                i++;
            }

            return i != a.Length -1 ? i : -1;
        }
        [Benchmark]
        public int BinarySearch()
        {
            int[] a = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            int x = 5;
            int i = 0, j = a.Length;

            while (i <= j)
            {
                int k = (i + j) / 2;

                if (x == a[k]) return k;
                else if (x < a[k]) j = k - 1;
                else i = i + 1;
            }

            return -1;
        }
    }

    public class BenchSpeedTest
    {
        public static void Main(string[] args)
        {
            var summary = BenchmarkRunner.Run<SearchElement>();
        }
    }
}