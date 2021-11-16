``` ini

BenchmarkDotNet=v0.13.1, OS=Windows 10.0.22000
AMD Ryzen 5 3600, 1 CPU, 12 logical and 6 physical cores
.NET SDK=6.0.100
  [Host]     : .NET 6.0.0 (6.0.21.52210), X64 RyuJIT
  DefaultJob : .NET 6.0.0 (6.0.21.52210), X64 RyuJIT


```
|        Method |       arr | minIndex | maxIndex |     Mean |    Error |   StdDev |   Median |
|-------------- |---------- |--------- |--------- |---------:|---------:|---------:|---------:|
|    **InsertSort** |         **?** |        **?** |        **?** | **42.99 ns** | **1.242 ns** | **3.642 ns** | **41.59 ns** |
| SelectionSort |         ? |        ? |        ? | 55.67 ns | 1.076 ns | 1.196 ns | 55.97 ns |
|    BubbleSort |         ? |        ? |        ? | 50.27 ns | 0.997 ns | 1.148 ns | 50.61 ns |
|    ShakerSort |         ? |        ? |        ? | 58.17 ns | 1.174 ns | 1.397 ns | 57.66 ns |
|     ShellSort |         ? |        ? |        ? | 40.28 ns | 0.622 ns | 0.520 ns | 40.44 ns |
|      HeapSort |         ? |        ? |        ? | 91.49 ns | 1.815 ns | 2.229 ns | 90.59 ns |
|     **QuickSort** | **Int32[10]** |        **0** |        **9** | **79.74 ns** | **1.421 ns** | **1.329 ns** | **79.28 ns** |
