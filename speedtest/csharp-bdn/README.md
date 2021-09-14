# BenchmarkDotNet 
Лучший пакет для проверки быстродействия вашего кода

``` ini

BenchmarkDotNet=v0.13.1, OS=Windows 10.0.22000
AMD Ryzen 5 3600, 1 CPU, 12 logical and 6 physical cores
.NET SDK=6.0.100-preview.7.21379.14
  [Host]     : .NET 6.0.0 (6.0.21.37719), X64 RyuJIT
  DefaultJob : .NET 6.0.0 (6.0.21.37719), X64 RyuJIT


```
|        Method |     Mean |     Error |    StdDev |   Median |
|-------------- |---------:|----------:|----------:|---------:|
|  LinearSearch | 7.436 ns | 0.1355 ns | 0.1267 ns | 7.468 ns |
| BarrierSearch | 7.474 ns | 0.1764 ns | 0.2473 ns | 7.324 ns |
|  BinarySearch | 5.704 ns | 0.1506 ns | 0.4442 ns | 5.847 ns |

## Legends 
  **Mean**   : Arithmetic mean of all measurements  
  **Error**  : Half of 99.9% confidence interval  
  **StdDev** : Standard deviation of all measurements  
  **Median** : Value separating the higher half of all measurements (50th percentile)  
  **1 ns**   : 1 Nanosecond (0.000000001 sec)
