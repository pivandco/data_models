using System.Diagnostics;

namespace SPEEDTEST
{
    public class StopWatchSpeedTest
    {
        public static string LinearSearch(int x)
        {
            int[] a = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            int i = 0;

            while (i < a.Length && a[i] != x)
            {
                i++;
            }

            return a[i] == x ? i.ToString() : "Значение не найдено";
        }

        public static string BarrierSearch(int x)
        {
            int i = 0;
            int[] a = new int[11] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, x };

            while (a[i] != x)
            {
                i++;
            }

            return i != a.Length - 1 ? i.ToString() : "Значение не найдено";
        }

        public static string BinarySearch(int x)
        {
            int[] a = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            int i = 0, j = a.Length;

            while (i <= j)
            {
                int k = (i + j) / 2;

                if (x == a[k]) return k.ToString();
                else if (x < a[k]) j = k - 1;
                else i = i + 1;
            }

            return "Значение не найдено";
        }

        public static void Main(string[] args)
        {
            var startTime = Stopwatch.StartNew();
            Console.WriteLine($"Рез-т линейного поиска: {LinearSearch(5)}");
            startTime.Stop();
            Console.WriteLine($"Время выполнения: {startTime.Elapsed}");
                        
            startTime.Restart();
            Console.WriteLine($"Рез-т метода барьера: {BarrierSearch(5)}");
            startTime.Stop();
            Console.WriteLine($"Время выполнения: {startTime.Elapsed}");

            startTime.Restart();
            Console.WriteLine($"Рез-т метода барьера: {BinarySearch(5)}");
            startTime.Stop();
            Console.WriteLine($"Время выполнения: {startTime.Elapsed}");            
        }
    }
}